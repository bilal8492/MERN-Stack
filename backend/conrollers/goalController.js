//  @description Get goals
//  @route GET /api/goals
//  @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//  @description Set goals
//  @route POST /api/goals
//  @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({message:'Text is required'}) // normal error method

    res.status(200);
    throw new Error("Text is required"); // custom error method
  }
  res.status(200).json({ message: "Set goals" });
};

//  @description Update goals
//  @route PUT /api/goals:id
//  @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
};

//  @description Delete goals
//  @route DELETE /api/goals:id
//  @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
