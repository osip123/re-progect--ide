import './Aside.scss'

import { FaCode } from "react-icons/fa";
import { TiCloudStorage } from "react-icons/ti";


const Aside = () => {

    const ItemStule = {
        size: 26,
        color: '#c6c7cb'
    }

  return (
    <div style={{width: '56px', height: '77vh', backgroundColor: '#131417', margin: '20px', borderRadius: '18px' }}>
      <aside>
        <FaCode size={ItemStule.size} color={ItemStule.color} />
        <TiCloudStorage size={ItemStule.size} color={ItemStule.color} />
      </aside>
    </div>
  )
}

export default Aside
