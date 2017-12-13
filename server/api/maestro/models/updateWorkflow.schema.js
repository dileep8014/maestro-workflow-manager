'use strict';

const Joi = require('joi');
const joiVals = require('./JoiValidations');

function updateWorkflowSchema() {
  return Joi.object().keys({
    name: Joi.string().label(joiVals.getJoiError('createWorkflow_name')),
    tasks: Joi.array().items(Joi.object().keys({
      service: Joi.string().required().label(joiVals.getJoiError('createWorkflow_tasks_service')),
      action: Joi.string().required().label(joiVals.getJoiError('createWorkflow_tasks_action')),
      expectedResponse: Joi.number().required().label(joiVals.getJoiError('createWorkflow_tasks_expectedResponse')),
      responseSchema: Joi.object().required().label(joiVals.getJoiError('createWorkflow_tasks_responseSchema'))
    })).label(joiVals.getJoiError('createWorkflow_tasks'))
  });
}


module.exports = updateWorkflowSchema;
