<script setup lang="ts">
import { TodoDetail, API } from "@shared";

const route = useRoute();
const id = route.params.id;

const { fetchApi } = useApi();
const { data, error } = await fetchApi<TodoDetail >(`/api/todo/${id}`, {
  method: "GET",
});

if (error.value) {
  throw createError({
    statusCode: error.value.status,
    statusMessage: error.value.statusMessage,
  });
}
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <div class="flex items-center gap-12 md:mb-6">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">{{ data.title }}</h2>
        <p class="hidden max-w-screen-sm text-gray-500 md:block text-sm">Create Date: <span class="text-xs text-black">{{ dateFormat(data.createdAt) }}</span></p>
        <p class="hidden max-w-screen-sm text-gray-500 md:block text-sm">Update Date: <span class="text-xs text-black">{{ dateFormat(data.updatedAt) }}</span></p>
      </div>
      <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">{{ data.contents }}</p>
    </div>
  </div>
</template>