var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var callLogsSchema = new Schema({
  CallTime: { type: Date, required: true }, //"2017/02/29 17:13:41",
  CallDuration: { type: Number, required: true }, //"00:00:06",
  Ringduration: { type: Number }, //"1",
  Callernumber: { type: Number, required: true }, //"232",
  Direction: { type: String, required: true }, //"O",
  Callednumber: { type: String, required: true }, //"231",
  DialedNumber: { type: String }, //"231",
  AccountCode: { type: String }, //"",
  IsInternal: { type: String }, //"0",
  CallId: { type: String, required: true }, //"1001131",
  Continuation: { type: String }, //"0",
  Party1Device: { type: String }, //"E232",
  Party1Name: { type: String }, //"Ravi",
  Party2Device: { type: String }, //"T9018",
  Party2Name: { type: String }, //"Line 18.0",
  HoldTime: { type: Number }, //"0",
  ParkTime: { type: Number }, //"0",
  AuthValid: { type: Number }, //"",
  AuthCode: { type: Number }, //"",
  UserCharged: { type: Number }, //"",
  CallCharge: { type: Number }, //"",
  Currency: { type: String }, //"",
  Amount: { type: Number }, //"",
  CallUnits: { type: Number }, //"",
  Units: { type: Number }, //"",
  CostPerUnit: { type: Number }, //"",
  MarkUp: { type: Number }, //"",
  ExternalTargetingCause: { type: String }, //"U",
  ExternalTargetId: { type: String }, //"U",
  ExternalTargetName: { type: String }, //"Ravi"
  // Internal fields
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
    // required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  branch: { type: Schema.Types.ObjectId, ref: "Branch" },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
  callerUser: { type: Schema.Types.ObjectId, ref: "User" },
  calledUser: { type: Schema.Types.ObjectId, ref: "User" },
  subdepartment: { type: String },
  CallType: { type: Array },
  CalculatedCost: { type: Number },
  TotalCycles: { type: Number },
  CostPerCycle: { type: Number },
  CallerName: { type: String },
  CalledName: { type: String },
  softDelete: { type: Boolean, default: false, required: true },
  callCostCalculated: { type: Boolean, default: false, required: true },
  callTypeCalculated: { type: Boolean, default: false, required: true },
  callerNameCalculated: { type: Boolean, default: false, required: true },
  calledNameCalculated: { type: Boolean, default: false, required: true },
  branchCalculated: { type: Boolean, default: false, required: true },
  departmentCalculated: { type: Boolean, default: false, required: true },
  organizationCalculated: { type: Boolean, default: false, required: true },
  transferCallCalculated: { type: Boolean, default: false, required: true },
  parentTransferCallLog: { type: Boolean, default: false, required: true },
  creationDate: { type: Date, required: true },
});

module.exports = mongoose.model("CallLogs", callLogsSchema);
