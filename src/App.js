import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [val1, setval1] = useState();
  var [val2, setval2] = useState();
  var [arr4, setarr4] = useState([]);
  // let [hour,sethour] = useState();
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var data = arr1[1]
  // let arr4 = [];
  let hour, minute;

  const slot = () => {
    arr1 = val1.split(":");
    arr2 = val2.split(":");
    // alert(arr1);
    // alert(arr2);

    // if(arr1[0]==12){
    //   arr1[0]=2;
    // }
    //  let h= parseInt(arr2[0])-parseInt(arr1[0]);
    // if (arr1[0] == 12) {
    //   arr1[0] = 2;
    // }
    hour = Math.abs(arr2[0] - arr1[0]);
    // arr1[1]=parseInt(arr1[1])%10;
    // arr1[1]=parseInt(arr1[1])*10;
    minute = Math.abs(arr2[1] - arr1[1]);
    console.log(hour)
    console.log(minute)

    let hslot = (hour * 6)
    alert(hslot)

    minute = minute / 10;

    let mslot = (minute * 1)

    alert(mslot)

    let tslot = hslot + mslot;
    alert(tslot)

    if (tslot % 2 != 0) {
      if (arr1[1] < arr2[1]) {
        tslot = tslot + 1;
      }
    }
    alert(tslot)

    for (var i = 0; i <= tslot; i++) {
      arr3[i] = (arr1[0] + ":" + arr1[1] + " = " + parseInt(i + 1));
      arr1[1] = parseInt(arr1[1]) + parseInt(10);
      if (arr1[1] >= 60) {
        arr1[1] = parseInt(arr1[1]) - 60;
        arr1[0] = parseInt(arr1[0]) + parseInt(1);
      }
      if (arr1[1] < 10) {
        arr1[1] = '0' + arr1[1]
      }

      // if(arr1[1]==arr2[1]){
      //   alert()
      //   arr3.pop();
      // }


      // for (var i = 0; i < tslot; i++) {
      //   console.log(arr3[0] + ":" + arr1[1] + "=" + parseInt(i+1))
      //   arr1[1]=parseInt(arr1[1])+10;
      //   if(arr1[1]>60){
      //     arr1[1]=10;
      //     arr1[0]=parseInt(arr1[0])+1;
      //   }
      // if (i > 1) {
      //   console.log(arr1[0] + ":" + parseInt(arr1[1] + 10) + "=" + i)

      // }

    }
    // arr1[1]=arr1[1]-10;
    // // alert(arr1[1])

    // if (parseInt(arr1[1] != data)) {
    //   arr1[1] = arr1[1] + 10;
    //   if (arr1[1] >= 60) {
    //     arr1[1] = arr1[1] - 60
    //   }
    //   arr3[i] = (arr1[0] + ":" + arr1[1] + " = " + parseInt(i + 1));

    // }

    setarr4(arr3);

    // console.log(arr3)


  }
  return (
    <>
      <input type='text' placeholder='start' onChange={(e) => setval1(e.target.value)}></input><br></br>
      <input type='text' placeholder='end' onChange={(e) => setval2(e.target.value)}></input><br></br><br></br>
      <input type='button' value="slot" onClick={slot}></input>
      <table border={2}>
        <tr>
          <th>sloats</th>

        </tr>
        {
          arr4.map((ele, ind) => {
            return (
              <tr>
                <td key={ind}>{ele}</td>
              </tr>
            )
          })

        }

      </table>
    </>
  );
}

export default App;
// import { useState } from 'react';
// import './App.css';

// function App() {

//   let [val1, setval1] = useState('0');
//   let [val2, setval2] = useState('0');
//   let [v3, setv3] = useState([]);
//   let arr = [];

//   const calc = () => {
//     arr = []
//     let temp = val1.split(":");
//     let temp1 = Number(temp[0]);
//     let temp2 = Number(temp[1]);
//     temp2 = String(temp2);
//     temp = temp2.split('');
//     let temp3 = Number(temp[temp.length - 1])
//     temp = val2.split(":");
//     let temp4 = Number(temp[0]);
//     let temp5 = Number(temp[1]);
//     temp5 = String(temp5);
//     temp = temp5.split('');
//     let temp6 = Number(temp[temp.length - 1])
//     temp2 = Number(temp2);
//     temp5 = Number(temp5);
//     let te, i;
//     for (i = temp1; i <= temp4; i++) {
//       for (let j = 0; j <= 5; j++) {
//         te = Number(j + String(temp3))
//         if (i == temp1 && temp2 > te) {
//           continue;
//         }
//         else if (i == temp4 && temp5 < te) {
//           break;
//         } else {
//           arr.push(i + ':' + te)
//         }
//       }
//     }
//     if (te < 50) {
//       arr.push((i - 1) + ':' + te)
//     }
//     else if(te-10 == temp5){

//     }
//     else {
//       arr.push((i) + ':' + String('0'+temp3 ))
//     }
//     setv3(arr)
//   }
//   return (
//     <>
//       <input type="text" value={val1} onChange={(e) => { setval1(e.target.value) }} />
//       <input type="text" value={val2} onChange={(e) => { setval2(e.target.value) }} />
//       <input type="button" value="Click Me" onClick={calc} />
//       {
//         v3.map((i) => {
//           return (
//             <>
//               <br />
//               {i}
//             </>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;
