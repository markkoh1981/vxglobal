export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to) => {
    console.log(to)
    if (to.hash) {
      return {
        el: to.hash,
        top: 30,
        behavior: "smooth",
      };
    }
  };
});
