//+ ====================================================================================================================
//+
//+ 6 kyu - Handshake problem  [ ID: 5574835e3e404a0bed00001b ] (handshake-problem)
//+ URL: https://www.codewars.com/kata/5574835e3e404a0bed00001b
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function getParticipants(handshakes) {
  const participants = handshakes < 1 ? 0 : Math.ceil((handshakes * 2) ** 0.5)
  return (participants * (participants - 1)) / 2 === handshakes ? participants : participants + 1
}

module.exports = { getParticipants }
