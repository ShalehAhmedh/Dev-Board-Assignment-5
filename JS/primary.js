document.getElementById('btn-1').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!');
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Fix Mobile Button Issue at 01:26:53
    `
    history.appendChild(p)
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})
document.getElementById('btn-2').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!');
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Added Dark Mode at 01:26:53
    `
    history.appendChild(p)
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})
document.getElementById('btn-3').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!');
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Optimize Home Page at 01:27:10 
    `
    history.appendChild(p)
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})
document.getElementById('btn-4').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!');
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Add New Emoji 🤲 at 01:27:25 
    `
    history.appendChild(p)
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})
document.getElementById('btn-5').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!'); 
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Integrate OpenAI API at 01:27:00 
    `
    history.appendChild(p)       
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})
document.getElementById('btn-6').addEventListener('click', function(event){
    event.preventDefault();
    const remain = parseInt(document.getElementById('remaining').innerText);
    const total = parseInt(document.getElementById('totalTask').innerText); 
    let sum = total + 1;
    let remains = remain - 1;
    document.getElementById('remaining').innerText = remains;
    document.getElementById('totalTask').innerText = sum;
    if(total !== sum){
        alert('Board Updated Succesfully!');
        const history = document.getElementById('comment');
    const p = document.createElement('p');
    p.innerText = `
    You have completed the task Improve Job searching at 01:27:53 
    `
    history.appendChild(p)
    }
    if(remains === 0){
        alert('Congrats!!! You have completed all the current tasks. ')
    }
})