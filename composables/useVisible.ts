export const useVisible = (container?: Ref<HTMLElement | null>) => {
  const element = ref(container);
  const visible = ref(false);

  const { stop } = useIntersectionObserver(
    element,
    ([{ isIntersecting }]) => (visible.value = isIntersecting)
  );

  onUnmounted(stop);

  return [visible, element];
};
