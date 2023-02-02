{/* <template>
  <div style="display:flex;justify-content:space-evenly">
    <form v-on:submit.prevent="postBook"
    style="display:flex;flex-direction:column;align-items:flex-end;">Create a book room
      <div>
        <label name="title">Book Name (required)</label>
        <input type="text" name="title" v-model="name" v-on:change="hideTaken" />
      </div>
      <div>
        <label name="password">Password</label>
        <input type="number" name="password" v-model="password" />
      </div>
      <div>
        <label name="creator">Creator Name</label>
        <input type="text" name="creator" v-model="creator" />
      </div>
      <button type="submit" :disabled="disableSubmit">submit</button>
    </form>
  </div>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'CreateBook',
  data () {
    return {
      name: '',
      password: '',
      disableSubmit: false,
      taken: false,
      creator: ""

    }
  },
  methods: {
    postBook: function () {
      if (this.name.length < 3) return;

      this.disableSubmit = true;


      firebase.database().ref("Books/" + this.name).get()
      .then(snapshot => {

        if (snapshot.exists()) {
          console.log("exists already")
            this.taken = true;
            return;
        }
        else {
          console.log("in business") // is this the right way to add new data?
          var roomCreator = this.creator.length > 0 ? this.creator : "anonymous"
          firebase.database().ref("Books/" + this.name).set({
            creator: roomCreator,
            password: this.password
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

      })
      .catch((error) => {
          console.log("nerp")
          setTimeout(() => {this.disableSubmit = false}, 2000)
          console.error(error);
      });
    },
    hideTaken: function() {
      this.taken = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> */}
