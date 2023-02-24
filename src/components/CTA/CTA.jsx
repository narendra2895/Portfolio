import React from 'react'
import CV from '../CTA/NarendraK.pdf'

const CTA = () => {
  return (
    <div>
          <div className="buttons">
                  <a href={CV} download='Narendracv.pdf'><button className="btn btn-primary"  >Download CV</button></a>
                <a href='#Contact'><button className="btn btn-secondary">Say HI</button></a>
            </div>
    </div>
  )
}

export default CTA