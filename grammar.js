const PREC = {
  COMMENT: 1
}

module.exports = grammar({
  name: 'latex',

  extras: $ => [
    $.comment,
    /\s/
  ],

  rules: {
    document: $ => repeat(choice(
      // TODO: Add rules for commands, environments, etc.
    )),

    comment: $ => /\%.*/
  }
})
