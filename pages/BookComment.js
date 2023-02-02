{/* <template>
  <div v-if="comment.pageNumber > 0" style="display:flex;flexDirection:column;justifyContent:center">
    <span>{{comment.author}} - ({{comment.pageNumber}})</span>
    <span>{{comment.text}}</span>
    <ul v-if="comment.replies && comment.replies.length > 0">
      <div v-for="commentReply in comment.replies" v-bind:key="commentReply.text">
        {{commentReply.author + " : " + commentReply.text}}
      </div>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BookComment',
  props: { comment: {pageNumber: 0, author: "", text: "",
    replies: [{author: "", text: ""}]} },
  data () {
    return {
      replyText: 'dunno if ill use this var'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> */}
