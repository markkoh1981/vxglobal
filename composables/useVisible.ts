export const useVisible = (container?: Ref<HTMLElement | null>) => {
  const element = ref(container);
  const visible = ref(false);

  const { stop } = useIntersectionObserver(
    element,
    useDebounceFn(([{ isIntersecting }]) => {
      visible.value = isIntersecting;

      if (isIntersecting) return stop();
    })
  );

  onUnmounted(stop);

  return [visible, element] as const;
};
