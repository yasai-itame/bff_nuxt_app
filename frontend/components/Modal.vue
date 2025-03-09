<script setup lang="ts">
import type { TodoDetail, TodoCreate } from "@shared";
import _ from "lodash";

interface Props {
  isOpen: boolean;
  typeName?: string;
  data?: TodoDetail;
};

interface Emits {
  (e: "close"): void;
  (e: "submit", type: string, data: TodoDetail | TodoCreate): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const title = ref<string>("");
const data = ref<TodoDetail | TodoCreate>({});

const capitalize = (name: string) => {
  if (typeof name !== "string" || !name) return name;
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

const submit = () => {
  if (props.typeName === "update") {
    if ("updatedAt" in data.value) {
      const newUpdate = new Date();
      data.value.updatedAt = newUpdate.toISOString();
    }
  }
  emits("submit", props.typeName, data.value);
}

const close = () => {
  emits("close");
}

watch(() => props.typeName, () => {
  title.value = capitalize(props.typeName);
  if (title.value === "create") {
    data.value = {};
  }
});

watch(() => props.data, () => {
  data.value = _.cloneDeep(props.data);
}, { deep: true });
</script>

<template>
  <div class="relative">
    <div id="modalOverlay" :class="{block: isOpen, hidden: !isOpen}" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form @submit.prevent="submit" class="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h2 class="text-xl font-bold mb-4">Todo {{ title }}</h2>
        <div class="mb-4">
          <template v-if="props.typeName !== 'delete'">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
              Title
            </label>
            <input v-model="data.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title">
          </template>
          <template v-else>
            <p class="block text-gray-700 text-sm font-bold mb-2">Title</p>
            <p class="py-2 px-3">{{ data.title }}</p>
          </template>
        </div>
        <div class="mb-4">
          <template v-if="props.typeName !== 'delete'">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="contents">
              Contents
            </label>
            <textarea v-model="data.contents" id="contents" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contents"></textarea>
          </template>
          <template v-else>
            <p class="block text-gray-700 text-sm font-bold mb-2">Contents</p>
            <p class="py-2 px-3">{{ data.contents }}</p>
          </template>
        </div>
        <div class="flex">
          <button @click="close" type="button" class="bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
          <button type="submit" class="bg-cyan-400 text-white px-4 py-2 ml-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>