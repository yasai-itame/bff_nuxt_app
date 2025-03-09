<script setup lang="ts">
import Paginate from "vuejs-paginate-next";

interface Props {
  total: number;
};

interface Emits {
  (e: "click", value: number): void
};

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const currentNumber = ref<number>(1);

const total = computed(() => {
  const count = props.total;
  const base = 10;
  return 1 + Math.floor(count / base);
});

const pagerClick = (e: number) => {
  emits("click", e);
}
</script>

<template>
  <paginate
  v-model="currentNumber"
  :page-count="total"
  :page-range="3"
  :click-handler="pagerClick"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'flex'"
  >
  </paginate>
</template>

<style>
.page-item {
  border-radius: 5px;
}
.page-link {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.page-item.active {
  background-color: #4CAF50;
}
.page-item.active .page-link {
  color: white;
}
</style>