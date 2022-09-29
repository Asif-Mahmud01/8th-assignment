.gymnasium-container{
    display: grid;
    grid-template-columns: 3fr 1fr;
}
.exercises-container h2{
    color: #82B6D9;
}
.exercises-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 50px;
}
.list-container{
    margin-right: 50px;
}
@media screen and  (max-width: 600px){
    .exercises-container{
        grid-template-columns: repeat(1, 1fr);
        margin-top: 800px;
    }
    .gymnasium-container{
        grid-template-columns: 1fr 1fr;
        display: flex;
        flex-direction: column;
    }
    .list-container{
        position: absolute;
        top: 0px;
    }
}