<template>
  <div class="grid place-items-center max-w-md mx-auto min-h-screen p-6">
    <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="Register"
      @submit="submitHandler" :actions="false" #default="{ value }">
      <h1>Register!</h1>
      <p>
        You can put any type of element inside a form, not just FormKit inputs
        (although only FormKit inputs are included with the submission).
      </p>
      <hr />
      <FormKit type="text" name="name" label="Your name" placeholder="Jane Doe" help="What do people call you?"
        validation="required" />
      <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com"
        help="What email should we use?" validation="required|email" />
      <div class="double">
        <FormKit type="password" name="password" label="Password" validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }" placeholder="Your password" help="Choose a password" />
        <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password"
          validation="required|confirm" help="Confirm your password" />
      </div>

      <FormKit type="submit" label="Register" />
      <pre wrap>{{ value }}</pre>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
// Let's pretend this is an ajax request:
await new Promise((r) => setTimeout(r, 1000))
submitted.value = true
};
</script>