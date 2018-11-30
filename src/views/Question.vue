<template>
  <div>
    <h1>The Questions page</h1>
    <ul li v-for="(question, index) in questions" :key="index">
      <div>
        {{question }}
        <div @click='selectAnswer'>
          <button value='1'>1</button>
          <button value='2'>2</button>
          <button value='3'>3</button>
        </div>
      </div>
    </ul>
    <button>Submit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      questions: []
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://test.natterbase.com:3002/questions",
      //   withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE"
      }
    })
      .then(response => {
        // console.log(response.data.questions);
        this.questions.push(...response.data.questions);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
      selectAnswer(e) {
          console.log(e.target.value)
      }
  }
};
</script>

<style>
</style>
