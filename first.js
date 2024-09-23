document.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('backdrop-blur-lg','bg-transparent');
        document.getElementById('navbar').classList.add('bg-[rgb(249,247,243,.1)]')
    } else {
        header.classList.remove('backdrop-blur-lg', 'bg-transparent');
        document.getElementById('navbar').classList.remove('bg-[rgb(249,247,243,.1)]')
    }
});



// Switching between Donation and History sections without page reload
document.getElementById('history').addEventListener('click', function() {
    document.getElementById('history').classList.add('bg-[rgb(180,244,97)]')
    document.getElementById('donation').classList.remove('bg-[rgb(180,244,97)]')
    document.getElementById('donationContent').classList.add('hidden');

    document.getElementById('historyContent').classList.remove('hidden');
});

document.getElementById('donation').addEventListener('click', function() {
    document.getElementById('donation').classList.add('bg-[rgb(180,244,97)]')
    document.getElementById('history').classList.remove('bg-[rgb(180,244,97)]')
    document.getElementById('historyContent').classList.add('hidden');
    document.getElementById('donationContent').classList.remove('hidden');
});
let value1 =0;
let value2=0;
let value3=0;
let bal=5500;


function donate( donateBtn,input,donate)
{
  
  
   
    let donateBtnn= document.getElementById(donateBtn);
    donateBtnn.addEventListener('click',function(){
        
        let inputt = parseFloat(document.getElementById(input).value);
        if(!isNaN(inputt) && inputt>0 )
        {
            let donatee = document.getElementById(donate);
            if(input==='input1')
            {
                value1= value1+inputt
                 donatee.innerText=`${value1} BDT`
            }
            else if(input==='input2')
            { value2= value2+inputt
                  donatee.innerText=`${value2} BDT`
            }
            else{
                  value3= value3+inputt
                  donatee.innerText=`${value3} BDT`
            }
           
            bal=bal-inputt;
            let balance = document.getElementById('balance')
            balance.innerText=`${bal} BDT`
        }


        
 
 }
)
   }

    



donate('donateBtn1','input1','donate1')
donate('donateBtn2','input2','donate2')
donate('donateBtn3','input3','donate3')



function dm (donateBtn, input){
    // Show the modal on button click
    document.getElementById(donateBtn).addEventListener('click', function() {
         const ip= document.getElementById(input).value
        if(ip>0&& ip!==NaN){
            document.getElementById('successModal').classList.remove('hidden');
           let history= document.getElementById('historyContent');
           const newHistoryItem = document.createElement('h1');
           if(donateBtn==='donateBtn1')
           {
       newHistoryItem.innerHTML=`    <div class="border border-gray-200 py-5 mx-10 rounded-xl px-4">
        <h1 class="font-bold text-2xl mb-2">${ip} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <p>Date: ${new Date()}</p>

       </div>`

       history.appendChild(newHistoryItem)

           }
           else if(donateBtn==='donateBtn2')
           {
            newHistoryItem.innerHTML=`    <div class="border border-gray-200 py-5 mx-10 rounded-xl px-4">
            <h1 class="font-bold text-2xl mb-2">${ip} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
            <p>Date: ${new Date()}</p>
    
           </div>`
    
           history.appendChild(newHistoryItem)
    
           }
           else{
            newHistoryItem.innerHTML=`    <div class="border border-gray-200 py-5 mx-10 rounded-xl px-4">
            <h1 class="font-bold text-2xl mb-2">${ip} Taka is Donated for   Injured in the Quota Movement</h1>
            <p>Date: ${new Date()}</p>
    
           </div>`
    
           history.appendChild(newHistoryItem)
    
           }
          


           


        }
        else{
            alert("invalid donate amount")
        }
        
    });
    
    // Close the modal
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('successModal').classList.add('hidden');
    });
    }
    
    
    dm('donateBtn1','input1');
    dm('donateBtn2','input2')
    dm('donateBtn3','input3')




    const titles = document.querySelectorAll('.accordion-title');
    
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const item = title.parentElement;
            item.classList.toggle('active');
        });
    });









// document.addEventListener('scroll', () => {
//     const header = document.getElementById('header');
//     if (window.scrollY > 0) {
//         header.classList.add('backdrop-blur-lg', 'bg-transparent');
//     } else {
//         header.classList.remove('backdrop-blur-lg', 'bg-transparent');
//     }
// });

// // Switching between Donation and History sections without page reload
// document.getElementById('history').addEventListener('click', function() {
//     document.getElementById('donationContent').classList.add('hidden');
//     document.getElementById('historyContent').classList.remove('hidden');
// });

// document.getElementById('donation').addEventListener('click', function() {
//     document.getElementById('historyContent').classList.add('hidden');
//     document.getElementById('donationContent').classList.remove('hidden');
// });

// // Donation logic with modal confirmation
// let value = 0;
// let balance = 5500;

// function donate(donateBtn, input, donateId) {
//     let donateBtnElem = document.getElementById(donateBtn);
//     donateBtnElem.addEventListener('click', function() {
//         let inputValue = parseFloat(document.getElementById(input).value);
//         if (isNaN(inputValue) || inputValue <= 0) {
//             alert("Invalid donation amount.");
//             return;
//         }

//         let donateElem = document.getElementById(donateId);
//         value += inputValue;
//         donateElem.innerText = `${value} BDT`;

//         balance -= inputValue;
//         document.getElementById('balance').innerText = `${balance} BDT`;

//         // Show confirmation modal
//         document.getElementById('successModal').classList.remove('hidden');
//     });
// }

// donate('donateBtn1', 'input1', 'donate1');

// // Close modal
// document.getElementById('closeModal').addEventListener('click', function() {
//     document.getElementById('successModal').classList.add('hidden');
// });
