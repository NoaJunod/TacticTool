sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("TacticTool.controller.View1", {

		onInit: function () {

		},

		_filter: function () {
			var oFilter = this._oGlobalFilter;

			this.byId("table").getBinding("rows").filter(oFilter, "Application");
		},

		filterGlobally: function (oEvent) {
			var sQuery = oEvent.getParameter("query");
			this._oGlobalFilter = null;
			var that = this;

			var searchBy = that.getView().byId("searchBy").getValue();

			if (sQuery) {
				this._oGlobalFilter = new Filter([
					new Filter(searchBy, FilterOperator.Contains, sQuery)
				], false);
			}

			this._filter();
		},

		goToDetailedView: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("DetailedView", true);
		}
	});
});