const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var home = new Schema({
    topTitulo: {
        type: String
    },
    topSubtitulo: {
        type: String
    },
    topTextoBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },
    serTitulo: {
        type: String
    },
    serSubtitulo: {
        type: String
    },
    serUmIcone: {
        type: String
    },
    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },
    serDoisIcone: {
        type: String
    },
    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },
    serTresIcone: {
        type: String
    },
    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },
    portTitulo: {
        type: String
    },
    portSubtitulo: {
        type: String
    },
    portUmOriginalName: {
        type: String
    },
    portUmFileName: {
        type: String
    },
    portUmTitulo: {
        type: String
    },
    portUmSubtitulo: {
        type: String
    },
    portDoisOriginalName: {
        type: String
    },
    portDoisFileName: {
        type: String
    },
    portDoisTitulo: {
        type: String
    },
    portDoisSubtitulo: {
        type: String
    },
    portTresOriginalName: {
        type: String
    },
    portTresFileName: {
        type: String
    },
    portTresTitulo: {
        type: String
    },
    portTresSubtitulo: {
        type: String
    },
    portQuatroOriginalName: {
        type: String
    },
    portQuatroFileName: {
        type: String
    },
    portQuatroTitulo: {
        type: String
    },
    portQuatroSubtitulo: {
        type: String
    },
    portCincoOriginalName: {
        type: String
    },
    portCincoFileName: {
        type: String
    },
    portCincoTitulo: {
        type: String
    },
    portCincoSubtitulo: {
        type: String
    },
    portSeisOriginalName: {
        type: String
    },
    portSeisFileName: {
        type: String
    },
    portSeisTitulo: {
        type: String
    },
    portSeisSubtitulo: {
        type: String
    },




  },
  {
      timestamps: true,

  });

  mongoose.model('Home', home);