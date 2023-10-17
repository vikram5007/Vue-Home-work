<template>
<form>
<div>
    <label>Name: </label>
    <input type="text" placeholder="Enter Your Name " v-model="Namedata">
</div>
<div>
    <label>Contact no : </label>
    <input type="text" placeholder="Enter Your Number " v-model="contact">
</div>
<div>
    <label>Email: </label>
    <input type="text" placeholder="Enter Your Email " v-model="email">
</div>
<button type="submit" @click.prevent="ActivatePasser">Create</button>
</form>

</template>

<script>

export default{
    data(){
    return{
    Namedata:"",
    contact:"",
    email:"",
    array:[]
    }
    },
    emits:['pass-value'],
    methods:{
    ActivatePasser(){
    this.array.push({
        name:this.Namedata,
        phone:this.contact,
        email:this.email,
        favourite:false
    })
    this.$emit('pass-value',this.array)
    }
}

}
</script>

