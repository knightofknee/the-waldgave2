{/* <template>
  <div>
    <div>log in to a book room: </div>
    <form v-on:submit.prevent="findRoom">
      <input type="text" v-model="typedCode" placeholder="enter room code" />
      <button type="click">enter</button>
    </form>
    <BookRoom v-if="roomCreator.length && !hideRoom" v-bind:roomCode="roomCode" v-bind:bookComments="bookComments" v-bind:roomCreator="roomCreator"></BookRoom>
    <div v-if="hideRoom && roomCode.length > 0">
      {{roomCode}} - There is no room for this code
    </div>
    <CreateBook v-if="hideRoom" />
    <!-- <div v-if="hideRoom && roomCode.length == 0">
      {{roomCode}} - There is no room for this code
    </div> -->
  </div>
</template>

<script>
import BookRoom from './BookRoom'
import firebase from 'firebase/app'
import CreateBook from './CreateBook'

export default {
  name: 'ReadTogether',
  components: {
    BookRoom,
    CreateBook
  },
  data () {
    return {
      roomCode: '',
      typedCode: '',
      hideRoom: true,
      bookComments: [{ author: '', text: '', id: '', pageNumber: 0, replies: [{author: '', text: '', id: ''}] }],
      roomCreator: ''
    }
  },
  methods: {
    findRoom: function () {
      firebase.database().ref('Books/' + this.typedCode).get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.roomCreator = snapshot.val()['creator']
          var currComments = snapshot.val()['Comments']
          var temp = []
          for (var commentID in currComments) {
            var commentValues = currComments[commentID]
            temp.push({
              id: commentID,
              author: commentValues.author,
              text: commentValues.text,
              pageNumber: commentValues.pageNumber,
              replies: commentValues.replies})
          }

          this.roomCode = this.typedCode
          this.hideRoom = false
          this.bookComments = temp

        }else {
          this.bookComments = []
          this.hideRoom = true
          this.roomCode = this.typedCode
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style> */}
