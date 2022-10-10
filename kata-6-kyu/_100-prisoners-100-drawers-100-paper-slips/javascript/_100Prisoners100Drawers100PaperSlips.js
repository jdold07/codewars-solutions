//+ ====================================================================================================================
//+
//+ 6 kyu - 100 prisoners, 100 drawers, 100 paper slips  [ ID: 62beb65c0f0b30424cbf441a ] (_100-prisoners-100-drawers-100-paper-slips)
//+ URL: https://www.codewars.com/kata/62beb65c0f0b30424cbf441a
//+ Category: GAMES  |  Tags: PUZZLES | MATHEMATICS | PROBABILITY | LOGIC
//+
//+ ====================================================================================================================

const solve100Prisoners = (context) => {
  while (!context.isProcessComplete()) {
    let res = context.openDrawer(context.getCurrentPrisoner())
    while (res && !res.success) {
      res = context.openDrawer(res.slipLabel)
    }
  }
  return context.isSuccess()
}

module.exports = { solve100Prisoners }
