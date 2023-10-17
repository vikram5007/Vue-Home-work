<!-- eslint-disable vue/valid-template-root -->
<template>
    <header><h1>Friends</h1></header>
    <input-data @pass-value="AddContacts">
    
    </input-data>
    <ul>
        <Friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :email-address="friend.email"
        :phone-number="friend.phone"
        :is-favourite="friend.favourite"
        @toggler-fav="toggleFavouriteStatus"
       
        ></Friend-contact>
        
    </ul>
</template>


<script>
export default{
    data(){
        return{
        friends:[
        {id:1,
        name:"Vikram",
        phone:9843177779,
        email:"Raghulkalai92@gmail.com",
        favourite:true
        },
        {id:2,
        name:"Monisha",
        phone:9843477779,
        email:"Monisha@gmail.com",
        favourite:false
        }
        ]
        }
    },
    methods:{
    toggleFavouriteStatus(id){
    const FriendtoFavourite=this.friends.find(friend=>friend.id===id);
    FriendtoFavourite.favourite=!FriendtoFavourite.favourite
    },
    AddContacts(arrayvalue){
    alert('working')
    console.log(arrayvalue);
    }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
