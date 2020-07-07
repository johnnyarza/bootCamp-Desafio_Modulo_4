export default (mongoose) => {
  const studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error('Nota menor que zero');
      },
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const studentModel = mongoose.model('students', studentSchema);
  return studentModel;
};
