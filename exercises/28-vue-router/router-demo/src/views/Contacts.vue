<template>
  <div>
    <h1>Страница контактов</h1>
    <div class="content" ref="content">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores maiores tenetur eligendi quae quos rerum, voluptas repudiandae maxime obcaecati autem hic explicabo modi illum nesciunt quisquam aut, minima aliquam voluptatem!</p>
      <p>
        <a href="/">Смотрите на главной странице</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const links = this.$refs.content.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.pathname);
        this.$router.push(e.target.pathname);
      });
    });
  },
};
</script>
