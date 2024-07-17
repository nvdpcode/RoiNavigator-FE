import React from 'react'
import BasicCard from '../../commonComponent/carts';
import { wallImage, secondImage } from '../../assets/assets';

let arrayList = [
  {
    CardImage: wallImage
  },
  {
    CardImage: secondImage
  }
]
function HomeUser() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      marginTop: 110,
      width: "100%",
      justifyContent: 'center',
      gap: 40,

    }}>
      {arrayList.map((carItem,index) => {
        return (
          <BasicCard cardDetails={carItem} key={index} />
        )
      })}

    </div>
  )
}

export default HomeUser;
