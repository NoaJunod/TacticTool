sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("MarketingToolTestSpace.MarketingToolTest.controller.detailedView", {
		onInit: function () {},
		/**
		 *@memberOf MarketingToolTestSpace.MarketingToolTest.controller.detailedView
		 */
		onEdit: function (oEvent) {
			//CustomHeader 
			var saveBtn = this.getView().byId("saveButton");
			var editBtn = this.getView().byId("editButton");
			saveBtn.setBlocked(false);
			editBtn.setBlocked(true);
			//General Information
			var priorityField = this.getView().byId("priorityFieldID");
			var statusField = this.getView().byId("statusFieldID");
			var subclusterField = this.getView().byId("subclusterFieldID");
			var crmCodeField = this.getView().byId("crmCodeFieldID");
			var activityNameField = this.getView().byId("activityNameFieldID");
			var highlightsField = this.getView().byId("highlightsFieldID");
			var campaignTypeField = this.getView().byId("campaignTypeFieldID");
			var marketeerField = this.getView().byId("marketeerFieldID");
			var hostVenueField = this.getView().byId("hostVenueFieldID");
			var startDateField = this.getView().byId("startDateFieldID");
			var endDateField = this.getView().byId("endDateFieldID");
			priorityField.setEditable(true);
			statusField.setEditable(true);
			subclusterField.setEditable(true);
			crmCodeField.setEditable(true);
			activityNameField.setEditable(true);
			highlightsField.setEditable(true);
			campaignTypeField.setEditable(true);
			marketeerField.setEditable(true);
			hostVenueField.setEditable(true);
			startDateField.setEditable(true);
			endDateField.setEditable(true);
			//Targets
			var chdeBox = this.getView().byId("chdeBoxID");
			var chfrBox = this.getView().byId("chfrBoxID");
			var publicSectorBox = this.getView().byId("publicSectorBoxID");
			var healthcareBox = this.getView().byId("healthcareBoxID");
			var retailBox = this.getView().byId("retailBoxID");
			var consumerProductionBox = this.getView().byId("consumerProductionBoxID");
			var insuranceBox = this.getView().byId("insuranceBoxID");
			var bankingBox = this.getView().byId("bankingBoxID");
			var platTechBox = this.getView().byId("platTechBoxID");
			var peopleBox = this.getView().byId("peopleBoxID");
			var intelligentSpentBox = this.getView().byId("intelligentSpentBoxID");
			var experienceMgmtBox = this.getView().byId("experienceMgmtBoxID");
			var digitalCoreBox = this.getView().byId("digitalCoreBoxID");
			var cxBox = this.getView().byId("cxBoxID");
			var generalBusinessBox = this.getView().byId("generalBusinessBoxID");
			var servicesBox = this.getView().byId("servicesBoxID");
			var ddcBox = this.getView().byId("ddcBoxID");
			chdeBox.setEditable(true);
			chfrBox.setEditable(true);
			publicSectorBox.setEditable(true);
			healthcareBox.setEditable(true);
			retailBox.setEditable(true);
			consumerProductionBox.setEditable(true);
			insuranceBox.setEditable(true);
			bankingBox.setEditable(true);
			platTechBox.setEditable(true);
			peopleBox.setEditable(true);
			experienceMgmtBox.setEditable(true);
			intelligentSpentBox.setEditable(true);
			digitalCoreBox.setEditable(true);
			cxBox.setEditable(true);
			generalBusinessBox.setEditable(true);
			servicesBox.setEditable(true);
			ddcBox.setEditable(true);
			//Budget
			var typeOfCostsField = this.getView().byId("typeOfCostsFieldID");
			var costOfActivityField = this.getView().byId("costOfActivityFieldID");
			var incrementalFundingsField = this.getView().byId("incrementalFundingsFieldID");
			var barterDealValueField = this.getView().byId("barterDealValueFieldID");
			var bruttoMarketingExpenseField = this.getView().byId("bruttoMarketingExpenseFieldID");
			var marketingRevenueField = this.getView().byId("marketingRevenueFieldID");
			var netMarketingExpenseField = this.getView().byId("netMarketingExpenseFieldID");
			typeOfCostsField.setEditable(true);
			costOfActivityField.setEditable(true);
			incrementalFundingsField.setEditable(true);
			barterDealValueField.setEditable(true);
			bruttoMarketingExpenseField.setEditable(true);
			marketingRevenueField.setEditable(true);
			netMarketingExpenseField.setEditable(true);
			//Digital Cost Split
			var tacticBudgetField = this.getView().byId("tacticBudgetFieldID");
			var paidField = this.getView().byId("paidFieldID");
			var webChannelsField = this.getView().byId("webChannelsFieldID");
			var mediaProductionsField = this.getView().byId("mediaProductionsFieldID");
			tacticBudgetField.setEditable(true);
			paidField.setEditable(true);
			webChannelsField.setEditable(true);
			mediaProductionsField.setEditable(true);
			//KPI Planning
			var msoleOnPremField = this.getView().byId("msoleOnPremFieldID");
			var msoleCloudField = this.getView().byId("msoleCloudFieldID");
			var msogbOnPremField = this.getView().byId("msogbOnPremFieldID");
			var msogbCloudField = this.getView().byId("msogbCloudFieldID");
			var msoValueTotalField = this.getView().byId("msoValueTotalFieldID");
			msoleOnPremField.setEditable(true);
			msoleCloudField.setEditable(true);
			msogbOnPremField.setEditable(true);
			msogbCloudField.setEditable(true);
			msoValueTotalField.setEditable(true);
			//KPI Planning
			var mediaSwitch = this.getView().byId("mediaSwitchID");
			var engagementSwitch = this.getView().byId("engagementSwitchID");
			mediaSwitch.setEnabled(true);
			engagementSwitch.setEnabled(true);
		},
		/**
		 *@memberOf MarketingToolTestSpace.MarketingToolTest.controller.detailedView
		 */
		onSave: function (oEvent) {
			//CustomHeader
			var saveBtn = this.getView().byId("saveButton");
			var editBtn = this.getView().byId("editButton");
			editBtn.setBlocked(false);
			saveBtn.setBlocked(true);
			//General Information
			var priorityField = this.getView().byId("priorityFieldID");
			var statusField = this.getView().byId("statusFieldID");
			var subclusterField = this.getView().byId("subclusterFieldID");
			var crmCodeField = this.getView().byId("crmCodeFieldID");
			var activityNameField = this.getView().byId("activityNameFieldID");
			var highlightsField = this.getView().byId("highlightsFieldID");
			var campaignTypeField = this.getView().byId("campaignTypeFieldID");
			var marketeerField = this.getView().byId("marketeerFieldID");
			var hostVenueField = this.getView().byId("hostVenueFieldID");
			var startDateField = this.getView().byId("startDateFieldID");
			var endDateField = this.getView().byId("endDateFieldID");
			var specifiedCampaignTypeField = this.getView().byId("specifiedCampaignTypeFieldID");
			specifiedCampaignTypeField.setEditable(false);
			priorityField.setEditable(false);
			statusField.setEditable(false);
			subclusterField.setEditable(false);
			crmCodeField.setEditable(false);
			activityNameField.setEditable(false);
			highlightsField.setEditable(false);
			campaignTypeField.setEditable(false);
			marketeerField.setEditable(false);
			hostVenueField.setEditable(false);
			startDateField.setEditable(false);
			endDateField.setEditable(false);
			//Targets
			var chdeBox = this.getView().byId("chdeBoxID");
			var chfrBox = this.getView().byId("chfrBoxID");
			var publicSectorBox = this.getView().byId("publicSectorBoxID");
			var healthcareBox = this.getView().byId("healthcareBoxID");
			var retailBox = this.getView().byId("retailBoxID");
			var consumerProductionBox = this.getView().byId("consumerProductionBoxID");
			var insuranceBox = this.getView().byId("insuranceBoxID");
			var bankingBox = this.getView().byId("bankingBoxID");
			var platTechBox = this.getView().byId("platTechBoxID");
			var peopleBox = this.getView().byId("peopleBoxID");
			var intelligentSpentBox = this.getView().byId("intelligentSpentBoxID");
			var experienceMgmtBox = this.getView().byId("experienceMgmtBoxID");
			var digitalCoreBox = this.getView().byId("digitalCoreBoxID");
			var cxBox = this.getView().byId("cxBoxID");
			var generalBusinessBox = this.getView().byId("generalBusinessBoxID");
			var servicesBox = this.getView().byId("servicesBoxID");
			var ddcBox = this.getView().byId("ddcBoxID");
			chdeBox.setEditable(false);
			chfrBox.setEditable(false);
			publicSectorBox.setEditable(false);
			healthcareBox.setEditable(false);
			retailBox.setEditable(false);
			consumerProductionBox.setEditable(false);
			insuranceBox.setEditable(false);
			bankingBox.setEditable(false);
			platTechBox.setEditable(false);
			peopleBox.setEditable(false);
			experienceMgmtBox.setEditable(false);
			intelligentSpentBox.setEditable(false);
			digitalCoreBox.setEditable(false);
			cxBox.setEditable(false);
			generalBusinessBox.setEditable(false);
			servicesBox.setEditable(false);
			ddcBox.setEditable(false);
			//Budget
			var typeOfCostsField = this.getView().byId("typeOfCostsFieldID");
			var costOfActivityField = this.getView().byId("costOfActivityFieldID");
			var incrementalFundingsField = this.getView().byId("incrementalFundingsFieldID");
			var barterDealValueField = this.getView().byId("barterDealValueFieldID");
			var bruttoMarketingExpenseField = this.getView().byId("bruttoMarketingExpenseFieldID");
			var marketingRevenueField = this.getView().byId("marketingRevenueFieldID");
			var netMarketingExpenseField = this.getView().byId("netMarketingExpenseFieldID");
			typeOfCostsField.setEditable(false);
			costOfActivityField.setEditable(false);
			incrementalFundingsField.setEditable(false);
			barterDealValueField.setEditable(false);
			bruttoMarketingExpenseField.setEditable(false);
			marketingRevenueField.setEditable(false);
			netMarketingExpenseField.setEditable(false);
			//Digital Cost Split
			var tacticBudgetField = this.getView().byId("tacticBudgetFieldID");
			var paidField = this.getView().byId("paidFieldID");
			var webChannelsField = this.getView().byId("webChannelsFieldID");
			var mediaProductionsField = this.getView().byId("mediaProductionsFieldID");
			tacticBudgetField.setEditable(false);
			paidField.setEditable(false);
			webChannelsField.setEditable(false);
			mediaProductionsField.setEditable(false);
			//KPI Planning
			var msoleOnPremField = this.getView().byId("msoleOnPremFieldID");
			var msoleCloudField = this.getView().byId("msoleCloudFieldID");
			var msogbOnPremField = this.getView().byId("msogbOnPremFieldID");
			var msogbCloudField = this.getView().byId("msogbCloudFieldID");
			var msoValueTotalField = this.getView().byId("msoValueTotalFieldID");
			msoleOnPremField.setEditable(false);
			msoleCloudField.setEditable(false);
			msogbOnPremField.setEditable(false);
			msogbCloudField.setEditable(false);
			msoValueTotalField.setEditable(false);
			//KPI Planning
			var mediaSwitch = this.getView().byId("mediaSwitchID");
			var engagementSwitch = this.getView().byId("engagementSwitchID");
			mediaSwitch.setEnabled(false);
			engagementSwitch.setEnabled(false);
		},
		/**
		 *@memberOf MarketingToolTestSpace.MarketingToolTest.controller.detailedView
		 */
		onDelete: function (oEvent) {
			//This code was generated by the layout editor.
			confirm("Are your Sure?");
		},
		/**
		 *@memberOf MarketingToolTestSpace.MarketingToolTest.controller.detailedView
		 */
		onCampaignTypeSelect: function (oEvent) {
			//This code was generated by the layout editor.
			var specifiedCampaignTypeField = this.getView().byId("specifiedCampaignTypeFieldID");
			specifiedCampaignTypeField.setEditable(true);
			var selectedItem = oEvent.getSource().getSelectedItem();
			if (selectedItem == this.getView().byId("advertisingSelectedID")) {
				alert("Advertising Selected!");
			} else if (selectedItem == this.getView().byId("channelMarketingSelectedID")) {
				alert("channelMarketing Selected!");
			}
			if (selectedItem == this.getView().byId("communicationSelectedID")) {
				alert("Communications Selected!");
			}
			if (selectedItem == this.getView().byId("contentAndMediaProductionsSelectedID")) {
				alert("Content and Media Selected!");
			}
			if (selectedItem == this.getView().byId("corporateBrandIdentitySelectedID")) {
				alert("Corporate Selected!");
			}
			if (selectedItem == this.getView().byId("directMarketingSelectedID")) {
				alert("Direct Marketing Selected!");
			}
			if (selectedItem == this.getView().byId("eventSelectedID")) {
				alert("Events Selected!");
			}
			if (selectedItem == this.getView().byId("intelligenceSelectedID")) {
				alert("Intelligence Selected!");
			}
			if (selectedItem == this.getView().byId("marketingTechnologySelectedID")) {
				alert("Marketing Technology Selected!");
			}
			if (selectedItem == this.getView().byId("salesAndPartnerEnablementSelectedID")) {
				alert("Sales and Partner Enablement Selected!");
			}
			if (selectedItem == this.getView().byId("socialMarketingSelectedID")) {
				alert("Social Marketing Selected!");
			}
			if (selectedItem == this.getView().byId("webChannelsSelectedID")) {
				alert("Web Channels Selected!");
			}
		},
		/**
		 *@memberOf MarketingToolTestSpace.MarketingToolTest.controller.detailedView
		 */
		action: function (oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function (oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function (prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
		}
	});
});