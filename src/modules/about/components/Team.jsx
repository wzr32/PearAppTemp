import React from 'react'
import TeamCard from '../items/TeamCard'

const Team = () => {
  return (
    <section>
      {Array(8).fill(
        <TeamCard
          position="Product Designer"
          name="Product Designer"
          description="asdadadasdasdadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
        />
      )}
    </section>
  )
}

export default Team