<script setup lang="ts">
import type { Todo, TodoDetail, TodoCreate, API } from "@shared";
import _ from "lodash";

const open = ref<boolean>(false);
const page = ref<number>(1);
const typeName = ref<string>("");
const modalData = ref<any>({});
const dialog = ref<boolean>(false);

const { fetchApi } = useApi();
const { data, error, execute } = await fetchApi<Todo>("/api/todo", {
  method: "GET",
  query: {
    page: page
  },
});

const todos = computed(() => {
  if (!data.value) return [];
  if (data.value.todos.length !== 0) {
    return data.value.todos;
  } else {
    return [];
  }
});

const total = computed(() => {
  if (!data.value) return 0;
  if (data.value.total) {
    return data.value.total;
  } else {
    return 0;
  }
});

if (error.value) {
  throw createError({
    statusCode: error.value.status,
    statusMessage: error.value.statusMessage,
  });
}

const complete = async (typeName: string, value: TodoDetail | TodoCreate) => {
  let submit: API = { method: "GET", body: undefined };
  submit.body = value;
  let id = "";
  if (submit.body.id !== undefined) {
    id = "/" + submit.body.id;
  }
  if (typeName === "create") {
    submit.method = "POST";
  }
  if (typeName === "delete") {
    submit.method = "DELETE";
    // 特にbodyにvalueを送る必要がないため、消しておく。
    // 一部の環境では ボディのない DELETE リクエストがブロックされることがある。
    submit.body = {};
  }
  if (typeName === "update") {
    submit.method = "PUT";
  }
  try {
    await $fetch<TodoDetail | TodoCreate>(`/api/todo${id}`, submit);
    open.value = false;
    dialog.value = true;
  } catch (error) {
    console.log(error)
    if (error.value) {
      throw createError({
        statusCode: error.value.status,
        statusMessage: error.value.statusMessage,
      });
    }
  }
  await execute();
};

const modalOpen = (type: string, index?: number) => {
  open.value = true;
  typeName.value = type;
  if (type !== "create") {
    modalData.value = _.cloneDeep(todos.value[index]);
  } else {
    modalData.value = {};
  }
};
const modalClose = () => {
  open.value = false;
};

const dialogClose = () => {
  dialog.value = false;
}

const pagerClick = (pageNum: number) => {
  page.value = pageNum;
}
</script>

<template>
  <div class="w-full pt-6 pb-6">
    <section class="container px-4 mx-auto">
      <div class="flex items-center">
        <button @click="modalOpen('create')" class="bg-cyan-400 text-white px-4 py-2 ml-2 rounded">
          Todo Add
        </button>
      </div>
      <div class="flex flex-col mt-2">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="w-1/6 py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Title
                  </th>

                  <th scope="col" class="w-1/3 px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Contents
                  </th>

                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Created date</th>

                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Update date</th>

                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Edit
                  </th>

                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                <template v-if="todos.length !== 0">
                  <tr v-for="(todo, index) in todos" :key="todo.id">
                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        <h2 class="font-medium text-gray-800 dark:text-white ">
                          <NuxtLink :to="`${todo.id}`">
                            {{ todo.title }}
                          </NuxtLink>
                        </h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <div>
                        <p class="text-gray-500 dark:text-gray-400">{{ todo.contents }}</p>
                      </div>
                    </td>

                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      {{ dateFormat(todo.createdAt) }}
                    </td>

                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      {{ dateFormat(todo.updatedAt) }}
                    </td>

                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <button @click="modalOpen('update', index)" class="text-white bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded">
                        Edit
                      </button>
                    </td>

                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <button @click="modalOpen('delete', index)" class="text-white bg-red-400 hover:bg-red-300 px-4 py-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="6" class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        <h4 class="text-gray-700 dark:text-gray-200">Not Todo List</h4>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <div v-if="total >= 11" class="mt-4">
            <Pager :total="total" @click="pagerClick" />
          </div>
        </div>
      </div>
    </section>
    <Dialog :isOpen="dialog" @close="dialogClose" />
    <Modal :isOpen="open" :type-name="typeName" :data="modalData" @submit="complete" @close="modalClose" />
  </div>
</template>