<template>
  <div>
    <h1>The Questions page</h1>
    <ul li v-for="(question, index) in questions" :key="index">
      <div>
        {{question }}
        <div>
          <input type="radio" :name="question" value="1" v-model="answers[index].answer"> 1
          <br>
          <input type="radio" :name="question" value="2" v-model="answers[index].answer"> 2
          <br>
          <input type="radio" :name="question" value="3" v-model="answers[index].answer"> 3
          <br>
        </div>
      </div>
    </ul>
    <!-- <button @click="submitAnswer">Submit</button> -->
    <button @click="submitAnswer">Submit</button>
    <!-- <button v-if="allAnswered" @click="submitAnswer">Submit</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        
      questions: [],
      answers: []
    };
  },
  computed: {
    allAnswered() {
      return (
        this.answers.filter(answer => answer.answer).length ===
        this.questions.length
      );
    }
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
        this.answers = this.questions.map(question => {
          return {
            question,
            answer: null
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    submitAnswer() {
        if( this.answers.filter(answer => answer.answer).length !=this.questions.length) {
            return alert('Incomplete answers');
        }
      this.$router.push("/successful");
    }
  }
};
</script>

<style>
</style>
