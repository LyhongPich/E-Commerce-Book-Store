<script setup>
    import Email from '../Footer/InputEmail.vue';
    import Letter from '../Footer/Letter.vue';
    import Logo from '../Footer/LogoAndImg.vue';
    import Submit from '../Footer/Submit.vue'
</script>

<template>
    <div class="h-[152px] bg-zinc-300 text-[18px]">
      <Letter data="Sign Up for our Newsletter" class="pl-[1190px] pt-[13px] mb-[5px]"></Letter>
      <div class="flex h-[84px] items-center">
        <div class="">
          <Logo logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" class="w-[51px] ml-[60px]"></Logo>
        </div>
        
        <div class="">
          <Logo logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" class="w-[51px] ml-[25px]"></Logo>
        </div>
        
        <div class="">
          <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/196/196566.png" class="w-[84px] ml-[20px]"></Logo>
        </div>
        
        <div class="">
          <Letter data="FAQ" class="ml-[294px]"></Letter>
        </div>
        
        <div class="">
          <Letter data="Join Us" class="ml-[160px]"></Letter>
        </div>
        
        <div class="flex w-[132px] ml-[14px] justify-between">
          <div class="">
            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" class="w-[21px] h-[21px]"></Logo>
          </div>
          
          <div class="">
            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" class="w-[21px] h-[21px]"></Logo>
          </div>
          
          <div class="">
            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/174/174855.png" class="w-[21px] h-[21px]"></Logo>
          </div>
          
          <div class="">
            <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/5968/5968823.png" class="w-[21px] h-[21px]"></Logo>
          </div>
        </div>
        <div class="flex ml-[160px]">
            
            <Email placeHold="Enter your email"></Email>
            
            <Submit btn="Subscribe Now"></Submit>
            
        </div>
      </div>
      <div class="w-[231px] flex opacity-[45%] ml-[60px] h-[21px] items-center">
        <div class="">
          <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/74/74717.png" class="w-[21px] h-[21px]"></Logo>
        </div>

        &nbsp;
        <div class="">
          <Logo logoSrc="https://cdn-icons-png.flaticon.com/512/2/2013.png" class="w-[5px] h-[5px]"></Logo>
        </div>
        &nbsp;

        <div class="mt-[-3px] w-[200px]">
          <Letter data="Wix - All rights reserved" class="h-[22px]"></Letter>
        </div>
      </div>
    </div>
</template>