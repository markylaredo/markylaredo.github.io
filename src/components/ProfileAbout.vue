<template>
  <v-container fluid white>
    <v-layout row justify-center align-center class="mt-n12">
      <v-flex class="text-center mt-n12">
        <v-avatar color="indigo" :size="150" class="mb-3 elevation-8">
          <img
            src="https://lh3.googleusercontent.com/7siZhzgNGobyIiVLoD5mm6i54wlZCQztlQJSMhgp9JeGOzejoA681VmTWZ54IkTvrRk0YRqBVxvZtfvme7UgR8P-t1jYfzWtOmzx_N0135YFPuJ91mjERbv17s3joszgz-XRR-Y0lPqi59IheHrjGU2Tpo985kjZir9OcDH5kmj8JNFubxC9iUIyJUkTPqszlSfzjrQiYpaFRkB9TwT-L1Y1lLeISogvB4CW74pT1Fov7rdLYtGMJ6wGL3l83YfbgXm8KJeJOSCtuex5IyKQ82JR9w5LoXDN29VM10-A7SV9a6aIcvRPXZyw7Afr3Gc55oLoaCRVNinNZvDp313oTfdpZ82ULPLo9Y8hl66rcCcwDldUqoB0aXZ5NMQ9bP-GNQYv_MGUaoufyaBGQPo9Gs6Po1sHEyWF4VzyGSfzNruoNcoYPc2GZKJZK9n2ZBtgz2UW3Mo_rOhtyvCpG6i4C2rBUhxWEFndvOh-b4ifdzl7SzeHtfFtJZLLGVyUzT60JsL7e8EGDE7VpXdsf6qxWDIvlumL5Xd5cpBh8fyRXw9zJNKFdKBP9Jn8svvSjRQu7hzkELWWcgoCMvtvFBfdNHlcWSXbsvs10NksllLiSAfvCvLDTX1IExWzMkvYqwpG-dQv3fMm5NvvY-UwKjtFcwmgyNihWVM_CNl3bFRg2wSd-qCwCR_iDQ=s768-no"
            lazy-src="https://lh3.googleusercontent.com/7siZhzgNGobyIiVLoD5mm6i54wlZCQztlQJSMhgp9JeGOzejoA681VmTWZ54IkTvrRk0YRqBVxvZtfvme7UgR8P-t1jYfzWtOmzx_N0135YFPuJ91mjERbv17s3joszgz-XRR-Y0lPqi59IheHrjGU2Tpo985kjZir9OcDH5kmj8JNFubxC9iUIyJUkTPqszlSfzjrQiYpaFRkB9TwT-L1Y1lLeISogvB4CW74pT1Fov7rdLYtGMJ6wGL3l83YfbgXm8KJeJOSCtuex5IyKQ82JR9w5LoXDN29VM10-A7SV9a6aIcvRPXZyw7Afr3Gc55oLoaCRVNinNZvDp313oTfdpZ82ULPLo9Y8hl66rcCcwDldUqoB0aXZ5NMQ9bP-GNQYv_MGUaoufyaBGQPo9Gs6Po1sHEyWF4VzyGSfzNruoNcoYPc2GZKJZK9n2ZBtgz2UW3Mo_rOhtyvCpG6i4C2rBUhxWEFndvOh-b4ifdzl7SzeHtfFtJZLLGVyUzT60JsL7e8EGDE7VpXdsf6qxWDIvlumL5Xd5cpBh8fyRXw9zJNKFdKBP9Jn8svvSjRQu7hzkELWWcgoCMvtvFBfdNHlcWSXbsvs10NksllLiSAfvCvLDTX1IExWzMkvYqwpG-dQv3fMm5NvvY-UwKjtFcwmgyNihWVM_CNl3bFRg2wSd-qCwCR_iDQ=s768-no"
            alt="mark anthony"
            height="240"
            width="240"
          />
        </v-avatar>
      </v-flex>

      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">About Me</h3>
          <!-- <h3 class="headline--text my-8 headline">About Me</h3> -->
        </div>
      </v-flex>
      <!-- <v-flex md5 xs12 sm12 class="text-center">
        <v-avatar color="indigo" :size="150" class="mb-3">
          <img
            :src="require('@/assets//grad_pic_crop.jpg')"
            alt="mark anthony"
            height="240"
            width="240"
          />
        </v-avatar>
        <h4 class="subtitle-1 teal--text">{{ myName }}</h4>
        <p>{{ myJob }}</p>
      </v-flex>-->
      <v-flex md9 xs9 sm9 justify-center align-center>
        <div class="text-center">
          <br />
          <p class="subheading text-justify">{{ aboutMe1 }}</p>
          <p class="subheading text-justify">{{ aboutMe2 }}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: function() {
    return {
      myName: "Mark Anthony Maat Laredo",
      myJob: "Software Engineer",
      aboutMe1:
        "Experienced Software Engineer with a demonstrated history of working in the IT industry. Strong engineering professional with a Bachelor's degree focused in Information Technology from Occidental Mindoro State College.",
      aboutMe2:
        "Goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support.",
      alignment: "center",
      dense: false,
      justify: "center"
    };
  }
};
</script>
