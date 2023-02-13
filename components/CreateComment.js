{/* <template>
  <div style="display:flex;justify-content:space-evenly">
    <form v-on:submit.prevent="postComment"
    style="display:flex;flex-direction:column;align-items:flex-end;">Create a comment
      <div>
        <label name="author">Name</label>
        <input type="text" name="author" v-model="name" />
      </div>
      <div>
        <label name="pageNumber">Page Number</label>
        <input type="number" name="pageNumber" v-model="pageNumber" />
      </div>
      <div>
        <label name="comment">Comment</label>
        <textarea style="width:100%;" rows="5" name="comment" v-model="comment" />
      </div>
      <button type="submit" :disabled="disableSubmit">submit</button>
    </form>
  </div>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'CreateComment',
  props: { roomCode: String },
  data () {
    return {
      name: '',
      pageNumber: 0,
      comment: '',
      disableSubmit: false

    }
  },
  methods: {
    postComment: function () {
      if (this.name.length < 3 || this.pageNumber == 0) return;

      this.disableSubmit = true;
      firebase.database().ref("Books/" + this.roomCode + "/Comments/" + Date.now()).set({
        author: this.name,
        pageNumber: this.pageNumber,
        text: this.comment
      })
      .then(snapshot => {
        console.log("walawala", snapshot)
        if (snapshot && snapshot.exists()) {
          var reply = snapshot.val()
          console.log("woo", reply)
          setTimeout(() => {this.disableSubmit = false}, 2000)
        }
      })
      .catch((error) => {
        console.log("nerp")
        setTimeout(() => {this.disableSubmit = false}, 2000)
        console.error(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> */}
