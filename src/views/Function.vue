<script setup lang="ts">
import { onMounted, ref } from "vue";
import { parse } from "mathjs";
import { drawCoordinates } from "@/utils/function";

const expression = ref<string>("");
const click = () => {
  const parsed = parse(expression.value);
  const canvas = document.getElementById("function-plot") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCoordinates(ctx, canvas.width, canvas.height);
  ctx.beginPath();
  for (let i = -200000; i <= 200000; i++) {
    const x = i / 1000;
    const y = parsed.evaluate({ x });
    const canvasX = canvas.width / 2 + x * 10 * 2;
    const canvasY = canvas.height / 2 - y * 10 * 2;
    if (i === -200000) {
      ctx.moveTo(canvasX, canvasY);
    } else {
      ctx.lineTo(canvasX, canvasY);
    }
  }
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
};
const resize = () => {
  const canvas = document.getElementById("function-plot") as HTMLCanvasElement;
  const container = document.getElementById("function-plot-container");
  if (!canvas || !container) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = Math.floor(container.clientWidth);
  canvas.height = Math.floor(container.clientHeight);
  console.log(canvas.width, canvas.height);
  drawCoordinates(ctx, canvas.width, canvas.height);
};
window.addEventListener("resize", resize);
onMounted(() => {
  resize();
});
</script>
<template>
  <div class="p-3 flex flex-col gap-3 items-center h-dvh">
    <div>
      <input
        type="text"
        placeholder="Function"
        class="input input-bordered w-full max-w-xs rounded-md bg-slate-500 p-1"
        v-model="expression"
        @keyup.enter="click"
      />
      <button class="btn btn-primary" @click="click">Submit</button>
    </div>
    <div
      id="function-plot-container"
      class="flex justify-center items-center h-full w-full"
    >
      <canvas id="function-plot" class="w-full h-full bg-neutral-950"></canvas>
    </div>
  </div>
</template>
<style scoped></style>
