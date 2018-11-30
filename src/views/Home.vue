<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt, officiis dolorem unde vitae totam autem voluptatem repellat consequatur quaerat eum ipsam rerum hic inventore accusantium, sunt obcaecati alias ullam veritatis odio minus. Excepturi, veniam! Iure laboriosam laudantium ullam nam deleniti recusandae officia maxime sit numquam? Sint maiores, ipsum quo harum amet earum illo mollitia laudantium, optio et eum, quaerat veniam fugiat. Cum cupiditate adipisci fugit ipsa consectetur id suscipit eaque, commodi atque debitis quo corrupti. Consectetur dolorem incidunt asperiores, unde eaque, illum repudiandae sint debitis neque eos non, provident reiciendis. Inventore aperiam alias amet nulla nihil ut quo eum.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt, officiis dolorem unde vitae totam autem voluptatem repellat consequatur quaerat eum ipsam rerum hic inventore accusantium, sunt obcaecati alias ullam veritatis odio minus. Excepturi, veniam! Iure laboriosam laudantium ullam nam deleniti recusandae officia maxime sit numquam? Sint maiores, ipsum quo harum amet earum illo mollitia laudantium, optio et eum, quaerat veniam fugiat. Cum cupiditate adipisci fugit ipsa consectetur id suscipit eaque, commodi atque debitis quo corrupti. Consectetur dolorem incidunt asperiores, unde eaque, illum repudiandae sint debitis neque eos non, provident reiciendis. Inventore aperiam alias amet nulla nihil ut quo eum.</p>

    <button @click="navigateToQuestion">Start</button>
  </div>
</template>

<script>
export default {
	methods: {
		navigateToQuestion() {
			this.$router.push('/questions');				
		}
	}

};
</script>

<style>
</style>
