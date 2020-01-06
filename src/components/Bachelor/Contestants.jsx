import React, { useState } from 'react'
// import * as d3 from "d3"
import _ from "lodash"
import ContestantPreview from "components/Bachelor/ContestantPreview"
import ContestantModal from "components/Bachelor/ContestantModal"
import './Contestants.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'

import peterCrownImg from './images/head-peter-crown.png'

// const ageAccessor = d => d.age
// const yAccessor = d => d.length

let contestantNames = _.map(contestantsDataB, _.property('name'));

const Contestants = ({ parsedContestants }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContestant, setSelectedContestant] = useState(null)
    const [selectedContestantIndex, setSelectedContestantIndex] = useState(null)

    function handleContestantSelection(contestant, i) {
        setSelectedContestant(contestant)
        setSelectedContestantIndex(i)
        setIsModalOpen(true)
    }

    function clearContestantSelection() {
        setSelectedContestant(null)
        setSelectedContestantIndex(null)
        setIsModalOpen(false)
    }

    return (
        <div className="Contestants">
            {parsedContestants ? (
                <div className="Contestants__grid">
                    {isModalOpen && (
                        <ContestantModal
                            onClose={clearContestantSelection}
                            contestant={selectedContestant}
                            name={contestantNames[selectedContestantIndex]}
                            contestantCoordinates={[parsedContestants[selectedContestantIndex].lng, parsedContestants[selectedContestantIndex].lat]}
                        />
                    )}
                    {contestantsDataA.map((info, i) => (
                        <ContestantPreview
                            info={info}
                            key={i}
                            name={contestantNames[i]}
                            onClick={() => handleContestantSelection(info, i)}
                        />
                    ))}
                </div>
            ) : (
                <div className="Contestants__loader__container">
                    <img src={peterCrownImg} className="Contestants__loader" />
                    Loading Contestants
                </div>
            )}
        </div>
    )
}

export default Contestants;