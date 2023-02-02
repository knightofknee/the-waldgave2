{/* <template>
<div>
  <div>
    Room Code: {{roomCode}}
  </div>
  <div>
    Room Creator: {{roomCreator}}
  </div>
  <div>
    <div>Change the page number to reveal more comments: </div>
    <input type="number" v-model="pageNumber" placeholder="enter page number"/>
    <!-- <button type="click" v-on:click="findRoom">enter</button> -->
    <br/>
    <div>{{revealedComments.length}} / {{bookComments.length}} comments visible</div>
    <!-- <div v-if="hiddenCount > 1">There are {{hiddenCount}} hidden comments</div>
    <div v-if="hiddenCount === 1">There is 1 hidden comment</div>
    <div v-if="hiddenCount === 0 && revealedComments.length > 0">There are no hidden comments</div> -->
    <br/>
  </div>
  <div v-if="revealedComments.length > 0">
    <BookComment v-for="comment in revealedComments" :key="comment.id" v-bind:comment="comment"></BookComment>
  </div>
  <br/>
  <CreateComment v-bind:roomCode="roomCode" />
</div>
</template>

<script>
import BookComment from './BookComment'
import CreateComment from './CreateComment'

export default {
  name: 'BookRoom',
  props: { roomCode: String, bookComments: [{pageNumber: Number, author: String, test: String, replies: [{}]}], roomCreator: String },
  components: { BookComment, CreateComment },
  data () {
    return {
      pageNumber: Number = 1
    }
  },
  computed: {
    revealedComments: function () {
      return this.bookComments.filter(comment =>
        parseInt(comment.pageNumber) <= parseInt(this.pageNumber))
    },
    hiddenCount: function () {
      return this.bookComments.length - this.revealedComments.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> */}
