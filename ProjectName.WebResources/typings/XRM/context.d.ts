declare const enum account_accountcategorycode {
  PreferredCustomer = 1,
  Standard = 2,
}
declare const enum account_accountclassificationcode {
  DefaultValue = 1,
}
declare const enum account_accountratingcode {
  DefaultValue = 1,
}
declare const enum account_address1_addresstypecode {
  BillTo = 1,
  ShipTo = 2,
  Primary = 3,
  Other = 4,
}
declare const enum account_address1_freighttermscode {
  FOB = 1,
  NoCharge = 2,
}
declare const enum account_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  PostalMail = 5,
  FullLoad = 6,
  WillCall = 7,
}
declare const enum account_address2_addresstypecode {
  DefaultValue = 1,
}
declare const enum account_address2_freighttermscode {
  DefaultValue = 1,
}
declare const enum account_address2_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum account_businesstypecode {
  DefaultValue = 1,
}
declare const enum account_customersizecode {
  DefaultValue = 1,
}
declare const enum account_customertypecode {
  Competitor = 1,
  Consultant = 2,
  Customer = 3,
  Investor = 4,
  Partner = 5,
  Influencer = 6,
  Press = 7,
  Prospect = 8,
  Reseller = 9,
  Supplier = 10,
  Vendor = 11,
  Other = 12,
}
declare const enum account_industrycode {
  Accounting = 1,
  AgricultureandNonpetrolNaturalResourceExtraction = 2,
  BroadcastingPrintingandPublishing = 3,
  Brokers = 4,
  BuildingSupplyRetail = 5,
  BusinessServices = 6,
  Consulting = 7,
  ConsumerServices = 8,
  DesignDirectionandCreativeManagement = 9,
  DistributorsDispatchersandProcessors = 10,
  DoctorsOfficesandClinics = 11,
  DurableManufacturing = 12,
  EatingandDrinkingPlaces = 13,
  EntertainmentRetail = 14,
  EquipmentRentalandLeasing = 15,
  Financial = 16,
  FoodandTobaccoProcessing = 17,
  InboundCapitalIntensiveProcessing = 18,
  InboundRepairandServices = 19,
  Insurance = 20,
  LegalServices = 21,
  NonDurableMerchandiseRetail = 22,
  OutboundConsumerService = 23,
  PetrochemicalExtractionandDistribution = 24,
  ServiceRetail = 25,
  SIGAffiliations = 26,
  SocialServices = 27,
  SpecialOutboundTradeContractors = 28,
  SpecialtyRealty = 29,
  Transportation = 30,
  UtilityCreationandDistribution = 31,
  VehicleRetail = 32,
  Wholesale = 33,
}
declare const enum account_ownershipcode {
  Public = 1,
  Private = 2,
  Subsidiary = 3,
  Other = 4,
}
declare const enum account_paymenttermscode {
  Net30 = 1,
  _210Net30 = 2,
  Net45 = 3,
  Net60 = 4,
}
declare const enum account_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
declare const enum account_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}
declare const enum account_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}
declare const enum account_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum account_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum account_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum account_territorycode {
  DefaultValue = 1,
}
declare const enum contact_accountrolecode {
  DecisionMaker = 1,
  Employee = 2,
  Influencer = 3,
}
declare const enum contact_address1_addresstypecode {
  BillTo = 1,
  ShipTo = 2,
  Primary = 3,
  Other = 4,
}
declare const enum contact_address1_freighttermscode {
  FOB = 1,
  NoCharge = 2,
}
declare const enum contact_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  PostalMail = 5,
  FullLoad = 6,
  WillCall = 7,
}
declare const enum contact_address2_addresstypecode {
  DefaultValue = 1,
}
declare const enum contact_address2_freighttermscode {
  DefaultValue = 1,
}
declare const enum contact_address2_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_address3_addresstypecode {
  DefaultValue = 1,
}
declare const enum contact_address3_freighttermscode {
  DefaultValue = 1,
}
declare const enum contact_address3_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_customersizecode {
  DefaultValue = 1,
}
declare const enum contact_customertypecode {
  DefaultValue = 1,
}
declare const enum contact_educationcode {
  DefaultValue = 1,
}
declare const enum contact_familystatuscode {
  Single = 1,
  Married = 2,
  Divorced = 3,
  Widowed = 4,
}
declare const enum contact_gendercode {
  Male = 1,
  Female = 2,
}
declare const enum contact_haschildrencode {
  DefaultValue = 1,
}
declare const enum contact_leadsourcecode {
  DefaultValue = 1,
}
declare const enum contact_msdyn_decisioninfluencetag {
  Decisionmaker = 0,
  Influencer = 1,
  Blocker = 2,
  Unknown = 3,
}
declare const enum contact_msdyn_orgchangestatus {
  NoFeedback = 0,
  NotatCompany = 1,
  Ignore = 2,
}
declare const enum powerpagelanguages {
  Arabic = 1025,
  BulgarianBulgaria = 1026,
  CatalanCatalan = 1027,
  ChineseTraditional = 1028,
  CzechCzechRepublic = 1029,
  DanishDenmark = 1030,
  GermanGermany = 1031,
  GreekGreece = 1032,
  English = 1033,
  FinnishFinland = 1035,
  FrenchFrance = 1036,
  Hebrew = 1037,
  HungarianHungary = 1038,
  ItalianItaly = 1040,
  JapaneseJapan = 1041,
  KoreanKorea = 1042,
  DutchNetherlands = 1043,
  NorwegianBokmålNorway = 1044,
  PolishPoland = 1045,
  PortugueseBrazil = 1046,
  RomanianRomania = 1048,
  RussianRussia = 1049,
  CroatianCroatia = 1050,
  SlovakSlovakia = 1051,
  SwedishSweden = 1053,
  ThaiThailand = 1054,
  TurkishTürkiye = 1055,
  IndonesianIndonesia = 1057,
  UkrainianUkraine = 1058,
  SlovenianSlovenia = 1060,
  EstonianEstonia = 1061,
  LatvianLatvia = 1062,
  LithuanianLithuania = 1063,
  VietnameseVietnam = 1066,
  BasqueBasque = 1069,
  HindiIndia = 1081,
  MalayMalaysia = 1086,
  KazakhKazakhstan = 1087,
  GalicianSpain = 1110,
  ChineseChina = 2052,
  PortuguesePortugal = 2070,
  SerbianLatinSerbia = 2074,
  ChineseHongKongSAR = 3076,
  SpanishTraditionalSortSpain = 3082,
  SerbianCyrillicSerbia = 3098,
}
declare const enum contact_paymenttermscode {
  Net30 = 1,
  _210Net30 = 2,
  Net45 = 3,
  Net60 = 4,
}
declare const enum contact_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
declare const enum contact_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}
declare const enum contact_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}
declare const enum contact_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum contact_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum contact_territorycode {
  DefaultValue = 1,
}
declare const enum activityparty_instancetypecode {
  NotRecurring = 0,
  RecurringMaster = 1,
  RecurringInstance = 2,
  RecurringException = 3,
  RecurringFutureException = 4,
}
declare const enum activityparty_participationtypemask {
  Sender = 1,
  ToRecipient = 2,
  CCRecipient = 3,
  BCCRecipient = 4,
  Requiredattendee = 5,
  Optionalattendee = 6,
  Organizer = 7,
  Regarding = 8,
  Owner = 9,
  Resource = 10,
  Customer = 11,
  ChatParticipant = 12,
  Related = 13,
}
declare const enum connection_record1objecttypecode {
  Account = 1,
  Contact = 2,
  Opportunity = 3,
  Lead = 4,
  User = 8,
  Team = 9,
  Position = 50,
  SocialProfile = 99,
  Case = 112,
  Competitor = 123,
  Contract = 1010,
  PriceList = 1022,
  Product = 1024,
  Quote = 1084,
  Order = 1088,
  Invoice = 1090,
  Territory = 2013,
  FacilityEquipment = 4000,
  SchedulingGroup = 4005,
  ResourceGroup = 4007,
  Activity = 4200,
  Meeting = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  ServiceActivity = 4214,
  SocialActivity = 4216,
  RecurringAppointment = 4251,
  MarketingList = 4300,
  Campaign = 4400,
  CampaignActivity = 4402,
  ProcessSession = 4710,
  ChannelAccessProfileRule = 9400,
  Goal = 9600,
  Entitlement = 9700,
  EntitlementChannel = 9701,
  EntitlementTemplateChannel = 9703,
  KnowledgeBaseRecord = 9930,
  KnowledgeArticle = 9953,
  Invitation = 10265,
  InviteRedemption = 10266,
  PublishingStateTransitionRule = 10285,
  Shortcut = 10287,
  Website = 10299,
  CustomerAsset = 10333,
  IoTAlert = 10347,
  IoTDevice = 10348,
  IoTDeviceCategory = 10349,
  IoTDeviceCommand = 10350,
  IoTDeviceRegistrationHistory = 10354,
  ProfileAlbum = 10539,
  CustomerVoicealert = 10544,
  CustomerVoicesurveyinvite = 10554,
  CustomerVoicesurveyresponse = 10556,
  CopilotTranscript = 10592,
  OngoingconversationDeprecated = 10640,
  Conversation = 10652,
  Session = 10669,
  Sequence = 10775,
  SequenceTarget = 10777,
  AssignmentRule = 10789,
  AssignmentMap = 10792,
  Insight = 10799,
  SuggestionPrincipalObjectAccess = 10808,
}
declare const enum connection_record2objecttypecode {
  Account = 1,
  Contact = 2,
  Opportunity = 3,
  Lead = 4,
  User = 8,
  Team = 9,
  Position = 50,
  SocialProfile = 99,
  Case = 112,
  Competitor = 123,
  Contract = 1010,
  PriceList = 1022,
  Product = 1024,
  Quote = 1084,
  Order = 1088,
  Invoice = 1090,
  Territory = 2013,
  FacilityEquipment = 4000,
  SchedulingGroup = 4005,
  ResourceGroup = 4007,
  Activity = 4200,
  Meeting = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  ServiceActivity = 4214,
  SocialActivity = 4216,
  RecurringAppointment = 4251,
  MarketingList = 4300,
  Campaign = 4400,
  CampaignActivity = 4402,
  ProcessSession = 4710,
  ChannelAccessProfileRule = 9400,
  Goal = 9600,
  Entitlement = 9700,
  EntitlementChannel = 9701,
  EntitlementTemplateChannel = 9703,
  KnowledgeBaseRecord = 9930,
  KnowledgeArticle = 9953,
  Invitation = 10265,
  InviteRedemption = 10266,
  PublishingStateTransitionRule = 10285,
  Shortcut = 10287,
  Website = 10299,
  CustomerAsset = 10333,
  IoTAlert = 10347,
  IoTDevice = 10348,
  IoTDeviceCategory = 10349,
  IoTDeviceCommand = 10350,
  IoTDeviceRegistrationHistory = 10354,
  ProfileAlbum = 10539,
  CustomerVoicealert = 10544,
  CustomerVoicesurveyinvite = 10554,
  CustomerVoicesurveyresponse = 10556,
  CopilotTranscript = 10592,
  OngoingconversationDeprecated = 10640,
  Conversation = 10652,
  Session = 10669,
  Sequence = 10775,
  SequenceTarget = 10777,
  AssignmentRule = 10789,
  AssignmentMap = 10792,
  Insight = 10799,
  SuggestionPrincipalObjectAccess = 10808,
}
declare const enum connection_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum connection_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum msdyn_kpicomputationaccuracy {
  Complete = 100000000,
  Partial = 100000001,
}
declare const enum msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthscorestate {
  Good = 0,
  Fair = 1,
  Poor = 2,
  Notenoughinfo = 3,
  NoClosedActivities = 4,
  HealthComputationInProgress = 5,
  Somethingwentwrong = 6,
  Entityolderthan2years = 7,
}
declare const enum msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthtrend {
  Improving = 0,
  Steady = 1,
  Declining = 2,
  Notenoughinfo = 3,
  Somethingwentwrong = 4,
  Healthnotapplicable = 5,
}
declare const enum msdyn_accountkpiitem_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum msdyn_accountkpiitem_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate {
  Good = 0,
  Fair = 1,
  Poor = 2,
  Notenoughinfo = 3,
  NoClosedActivities = 4,
  HealthComputationInProgress = 5,
  Somethingwentwrong = 6,
  Entityolderthan2years = 7,
}
declare const enum msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend {
  Improving = 0,
  Steady = 1,
  Declining = 2,
  Notenoughinfo = 3,
  Somethingwentwrong = 4,
  Healthnotapplicable = 5,
}
declare const enum msdyn_contactkpiitem_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum msdyn_contactkpiitem_statuscode {
  Active = 1,
  Inactive = 2,
}
declare namespace Form.account.Main {
  namespace Customerprofilecases {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "Customer_Account_Cases"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Recent_Cases"): Xrm.SubGridControl<"incident">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Customerprofilecases extends Xrm.PageBase<Customerprofilecases.Attributes,Customerprofilecases.Tabs,Customerprofilecases.Controls> {
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Recent_Cases"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace AccountformforCustomerCard {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cc_1661863836105"): Xrm.SubGridControl<"incident">;
      get(name: "cc_1662014496768"): Xrm.BaseControl;
      get(name: "header_name"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountformforCustomerCard extends Xrm.PageBase<AccountformforCustomerCard.Attributes,AccountformforCustomerCard.Tabs,AccountformforCustomerCard.Controls> {
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "cc_1661863836105"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "cc_1662014496768"): Xrm.BaseControl;
    getControl(controlName: "header_name"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace AccountHierarchyTileForm {
    namespace Tabs {
      interface hierarchy extends Xrm.SectionCollectionBase {
        get(name: "account tile"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opendeals"): Xrm.NumberAttribute;
      get(name: "openrevenue"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opendeals"): Xrm.NumberControl;
      get(name: "openrevenue"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "hierarchy"): Xrm.PageTab<Tabs.hierarchy>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountHierarchyTileForm extends Xrm.PageBase<AccountHierarchyTileForm.Attributes,AccountHierarchyTileForm.Tabs,AccountHierarchyTileForm.Controls> {
    getAttribute(attributeName: "opendeals"): Xrm.NumberAttribute;
    getAttribute(attributeName: "openrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "opendeals"): Xrm.NumberControl;
    getControl(controlName: "openrevenue"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace SocialProfiles {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "SOCIALPROFILES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subgrid_spaccount"): Xrm.SubGridControl<"socialprofile">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialProfiles extends Xrm.PageBase<SocialProfiles.Attributes,SocialProfiles.Tabs,SocialProfiles.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "subgrid_spaccount"): Xrm.SubGridControl<"socialprofile">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace CasesForCustomer {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "CasesForCustomer"): Xrm.SubGridControl<"incident">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CasesForCustomer extends Xrm.PageBase<CasesForCustomer.Attributes,CasesForCustomer.Tabs,CasesForCustomer.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "CasesForCustomer"): Xrm.SubGridControl<"incident">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace AccountformforConversationCustomerCard {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_name"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountformforConversationCustomerCard extends Xrm.PageBase<AccountformforConversationCustomerCard.Attributes,AccountformforConversationCustomerCard.Tabs,AccountformforConversationCustomerCard.Controls> {
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_name"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace TimelineWallControlAccountMain {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TimelineWallControlAccountMain extends Xrm.PageBase<TimelineWallControlAccountMain.Attributes,TimelineWallControlAccountMain.Tabs,TimelineWallControlAccountMain.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace AppforOutlookAccountCard {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AppforOutlookAccountCard extends Xrm.PageBase<AppforOutlookAccountCard.Attributes,AppforOutlookAccountCard.Tabs,AppforOutlookAccountCard.Controls> {
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace AccountReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountReferencePanel extends Xrm.PageBase<AccountReferencePanel.Attributes,AccountReferencePanel.Tabs,AccountReferencePanel.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace AccountforMultisessionexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_4"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RelatedCases"): Xrm.SubGridControl<"incident">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountforMultisessionexperience extends Xrm.PageBase<AccountforMultisessionexperience.Attributes,AccountforMultisessionexperience.Tabs,AccountforMultisessionexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RelatedCases"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace RecentCasesandEntitlements {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RecentCasesandEntitlements extends Xrm.PageBase<RecentCasesandEntitlements.Attributes,RecentCasesandEntitlements.Tabs,RecentCasesandEntitlements.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace AccountforInteractiveexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Devices_Tab extends Xrm.SectionCollectionBase {
        get(name: "Devices_Tab_Section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: "ref_pan_SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Contacts"): Xrm.BaseControl;
      get(name: "Devices_Associated_View"): Xrm.SubGridControl<"msdyn_customerasset">;
      get(name: "accountcasessgrid"): Xrm.BaseControl;
      get(name: "accountopportunitiesgrid"): Xrm.BaseControl;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "subgrid_Entitlement"): Xrm.BaseControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "Devices_Tab"): Xrm.PageTab<Tabs.Devices_Tab>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountforInteractiveexperience extends Xrm.PageBase<AccountforInteractiveexperience.Attributes,AccountforInteractiveexperience.Tabs,AccountforInteractiveexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Contacts"): Xrm.BaseControl;
    getControl(controlName: "Devices_Associated_View"): Xrm.SubGridControl<"msdyn_customerasset">;
    getControl(controlName: "accountcasessgrid"): Xrm.BaseControl;
    getControl(controlName: "accountopportunitiesgrid"): Xrm.BaseControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.BaseControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace accountcard {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface accountcard extends Xrm.PageBase<accountcard.Attributes,accountcard.Tabs,accountcard.Controls> {
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace SalesInsights {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "ChildAccounts"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface RAV2 extends Xrm.SectionCollectionBase {
        get(name: "RAV2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface RELATIONSHIP_ANALYTICS_TAB extends Xrm.SectionCollectionBase {
        get(name: "Activity Analysis_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "ADDRESS"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: "Summary_CadenceWidget"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "CadenceWidgetControl"): Xrm.BaseControl;
      get(name: "ChildAccounts"): Xrm.SubGridControl<"account">;
      get(name: "Contacts"): Xrm.SubGridControl<"contact">;
      get(name: "RICONTAINER_CHARTS"): Xrm.BaseControl;
      get(name: "RICONTAINER_CHARTS1"): Xrm.BaseControl;
      get(name: "accountopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone11"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "RAV2"): Xrm.PageTab<Tabs.RAV2>;
      get(name: "RELATIONSHIP_ANALYTICS_TAB"): Xrm.PageTab<Tabs.RELATIONSHIP_ANALYTICS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SalesInsights extends Xrm.PageBase<SalesInsights.Attributes,SalesInsights.Tabs,SalesInsights.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "CadenceWidgetControl"): Xrm.BaseControl;
    getControl(controlName: "ChildAccounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "RICONTAINER_CHARTS"): Xrm.BaseControl;
    getControl(controlName: "RICONTAINER_CHARTS1"): Xrm.BaseControl;
    getControl(controlName: "accountopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone11"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace Customerprofile {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Customerprofile extends Xrm.PageBase<Customerprofile.Attributes,Customerprofile.Tabs,Customerprofile.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Quick {
  namespace AppforOutlookAccountQuickView {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AppforOutlook_Accoount_QV_Subgrid_2"): Xrm.SubGridControl<"activitypointer">;
      get(name: "AppforOutlook_Account_QV_Subgrid_1"): Xrm.SubGridControl<"activitypointer">;
      get(name: "AppforOutlook_Account_QV_Subgrid_3"): Xrm.SubGridControl<"opportunity">;
      get(name: "AppforOutlook_Account_QV_Subgrid_4"): Xrm.SubGridControl<"incident">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AppforOutlookAccountQuickView extends Xrm.PageBase<AppforOutlookAccountQuickView.Attributes,AppforOutlookAccountQuickView.Tabs,AppforOutlookAccountQuickView.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AppforOutlook_Accoount_QV_Subgrid_2"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "AppforOutlook_Account_QV_Subgrid_1"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "AppforOutlook_Account_QV_Subgrid_3"): Xrm.SubGridControl<"opportunity">;
    getControl(controlName: "AppforOutlook_Account_QV_Subgrid_4"): Xrm.SubGridControl<"incident">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.QuickCreate {
  namespace AccountQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountQuickCreate extends Xrm.PageBase<AccountQuickCreate.Attributes,AccountQuickCreate.Tabs,AccountQuickCreate.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.account.Main {
  namespace Account {
    namespace Tabs {
      interface AssetsAndLocationsTab extends Xrm.SectionCollectionBase {
        get(name: "AssetsAndLocationsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "ChildAccounts"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "ADDRESS"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_ADDRESSINPUT_SECTION"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface documents_sharepoint extends Xrm.SectionCollectionBase {
        get(name: "documents_sharepoint_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "ChildAccounts"): Xrm.SubGridControl<"account">;
      get(name: "Contacts"): Xrm.SubGridControl<"contact">;
      get(name: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
      get(name: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "accountopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "name1"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone11"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AssetsAndLocationsTab"): Xrm.PageTab<Tabs.AssetsAndLocationsTab>;
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: "documents_sharepoint"): Xrm.PageTab<Tabs.documents_sharepoint>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Account extends Xrm.PageBase<Account.Attributes,Account.Tabs,Account.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "ChildAccounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
    getControl(controlName: "accountcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "accountopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "name1"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone11"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace Customerprofilecases {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "Customer_Contact_Cases"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Recent_Cases"): Xrm.SubGridControl<"incident">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Customerprofilecases extends Xrm.PageBase<Customerprofilecases.Attributes,Customerprofilecases.Tabs,Customerprofilecases.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Recent_Cases"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ContactformforCustomerCard {
    namespace Tabs {
      interface CardTab extends Xrm.SectionCollectionBase {
        get(name: "Customer card"): Xrm.PageSection;
        get(name: "Recent cases"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "cc_1662431725068"): Xrm.SubGridControl<"incident">;
      get(name: "header_fullname"): Xrm.StringControl | null;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "parentcustomerid"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Card Tab"): Xrm.PageTab<Tabs.CardTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactformforCustomerCard extends Xrm.PageBase<ContactformforCustomerCard.Attributes,ContactformforCustomerCard.Tabs,ContactformforCustomerCard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "cc_1662431725068"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "header_fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "parentcustomerid"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace AppforOutlookContactCard {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AppforOutlookContactCard extends Xrm.PageBase<AppforOutlookContactCard.Attributes,AppforOutlookContactCard.Tabs,AppforOutlookContactCard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "contact methods"): Xrm.PageSection;
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details extends Xrm.SectionCollectionBase {
        get(name: "personal information"): Xrm.PageSection;
        get(name: "professional information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "address"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "name"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notesandactivities extends Xrm.SectionCollectionBase {
        get(name: "activities"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_name"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "assistantname"): Xrm.Attribute<string>;
      get(name: "assistantphone"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "department"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "managername"): Xrm.Attribute<string>;
      get(name: "managerphone"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_name"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "assistantname"): Xrm.StringControl;
      get(name: "assistantphone"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "department"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "managername"): Xrm.StringControl;
      get(name: "managerphone"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.StringControl;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes and activities"): Xrm.PageTab<Tabs.notesandactivities>;
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
    getAttribute(attributeName: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "assistantname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "assistantphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "department"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managerphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "salutation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
    getControl(controlName: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_name"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "assistantname"): Xrm.StringControl;
    getControl(controlName: "assistantphone"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "department"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "managername"): Xrm.StringControl;
    getControl(controlName: "managerphone"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "salutation"): Xrm.StringControl;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace ContactReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactReferencePanel extends Xrm.PageBase<ContactReferencePanel.Attributes,ContactReferencePanel.Tabs,ContactReferencePanel.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace PortalContactEnhanced {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "contact methods"): Xrm.PageSection;
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details extends Xrm.SectionCollectionBase {
        get(name: "personal information"): Xrm.PageSection;
        get(name: "professional information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "address"): Xrm.PageSection;
        get(name: "contact_webrole_section"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "name"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notesandactivities extends Xrm.SectionCollectionBase {
        get(name: "activities"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface webauthentication extends Xrm.SectionCollectionBase {
        get(name: "{f0ef7388-9001-dd11-86da-0003ff48c0db}_section_4"): Xrm.PageSection;
        get(name: "{f0ef7388-9001-dd11-86da-0003ff48c0db}_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_name"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "adx_identity_accessfailedcount"): Xrm.NumberAttribute;
      get(name: "adx_identity_emailaddress1confirmed"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_locallogindisabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_lockoutenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_lockoutenddate"): Xrm.DateAttribute;
      get(name: "adx_identity_logonenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_mobilephoneconfirmed"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_securitystamp"): Xrm.Attribute<string>;
      get(name: "adx_identity_twofactorenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "adx_identity_username"): Xrm.Attribute<string>;
      get(name: "adx_timezone"): Xrm.NumberAttribute;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "assistantname"): Xrm.Attribute<string>;
      get(name: "assistantphone"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "department"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "managername"): Xrm.Attribute<string>;
      get(name: "managerphone"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_name"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "adx_externalidentity"): Xrm.SubGridControl<"adx_externalidentity">;
      get(name: "adx_identity_accessfailedcount"): Xrm.NumberControl;
      get(name: "adx_identity_emailaddress1confirmed"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_locallogindisabled"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_lockoutenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_lockoutenddate"): Xrm.DateControl;
      get(name: "adx_identity_logonenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_mobilephoneconfirmed"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_securitystamp"): Xrm.StringControl;
      get(name: "adx_identity_twofactorenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "adx_identity_username"): Xrm.StringControl;
      get(name: "adx_timezone"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "assistantname"): Xrm.StringControl;
      get(name: "assistantphone"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "department"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "grid_contact_mspp_webrole"): Xrm.SubGridControl<"mspp_webrole">;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "managername"): Xrm.StringControl;
      get(name: "managerphone"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.StringControl;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes and activities"): Xrm.PageTab<Tabs.notesandactivities>;
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: "web authentication"): Xrm.PageTab<Tabs.webauthentication>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PortalContactEnhanced extends Xrm.PageBase<PortalContactEnhanced.Attributes,PortalContactEnhanced.Tabs,PortalContactEnhanced.Controls> {
    getAttribute(attributeName: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
    getAttribute(attributeName: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_identity_accessfailedcount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "adx_identity_emailaddress1confirmed"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_locallogindisabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_lockoutenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_lockoutenddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "adx_identity_logonenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_mobilephoneconfirmed"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_securitystamp"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_identity_twofactorenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "adx_identity_username"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_timezone"): Xrm.NumberAttribute;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "assistantname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "assistantphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "department"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managerphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "salutation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
    getControl(controlName: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_name"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "adx_externalidentity"): Xrm.SubGridControl<"adx_externalidentity">;
    getControl(controlName: "adx_identity_accessfailedcount"): Xrm.NumberControl;
    getControl(controlName: "adx_identity_emailaddress1confirmed"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_locallogindisabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_lockoutenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_lockoutenddate"): Xrm.DateControl;
    getControl(controlName: "adx_identity_logonenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_mobilephoneconfirmed"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_securitystamp"): Xrm.StringControl;
    getControl(controlName: "adx_identity_twofactorenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "adx_identity_username"): Xrm.StringControl;
    getControl(controlName: "adx_timezone"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "assistantname"): Xrm.StringControl;
    getControl(controlName: "assistantphone"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "department"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "grid_contact_mspp_webrole"): Xrm.SubGridControl<"mspp_webrole">;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "managername"): Xrm.StringControl;
    getControl(controlName: "managerphone"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "salutation"): Xrm.StringControl;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ProfileWebFormEnhanced {
    namespace Tabs {
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "adx_organizationname"): Xrm.Attribute<string>;
      get(name: "adx_publicprofilecopy"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "mspp_userpreferredlcid"): Xrm.OptionSetAttribute<powerpagelanguages>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "nickname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "adx_organizationname"): Xrm.StringControl;
      get(name: "adx_publicprofilecopy"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mspp_userpreferredlcid"): Xrm.OptionSetControl<powerpagelanguages>;
      get(name: "nickname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProfileWebFormEnhanced extends Xrm.PageBase<ProfileWebFormEnhanced.Attributes,ProfileWebFormEnhanced.Tabs,ProfileWebFormEnhanced.Controls> {
    getAttribute(attributeName: "adx_organizationname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_publicprofilecopy"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mspp_userpreferredlcid"): Xrm.OptionSetAttribute<powerpagelanguages>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "nickname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "adx_organizationname"): Xrm.StringControl;
    getControl(controlName: "adx_publicprofilecopy"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mspp_userpreferredlcid"): Xrm.OptionSetControl<powerpagelanguages>;
    getControl(controlName: "nickname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace InviteWebForm {
    namespace Tabs {
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface InviteWebForm extends Xrm.PageBase<InviteWebForm.Attributes,InviteWebForm.Tabs,InviteWebForm.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace AIforSales {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface RAV2 extends Xrm.SectionCollectionBase {
        get(name: "RAV2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface RELATIONSHIP_ANALYTICS_TAB extends Xrm.SectionCollectionBase {
        get(name: "Activity Analysis_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "CUSTOMER_DETAILS_TAB"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "Summary_CadenceWidget"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: "Summary_section_7"): Xrm.PageSection;
        get(name: "TalkingPoints_section"): Xrm.PageSection;
        get(name: "WKW_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "CadenceWidgetControl"): Xrm.BaseControl;
      get(name: "Healthwidget"): Xrm.BaseControl;
      get(name: "RICONTAINER_CHARTS"): Xrm.BaseControl;
      get(name: "RICONTAINER_CHARTS1"): Xrm.BaseControl;
      get(name: "TalkingPoints"): Xrm.BaseControl;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "cc_1612863187947"): Xrm.BaseControl;
      get(name: "contactopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "emailaddress11"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "mobilephone1"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "parentcustomerid1"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone11"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "RAV2"): Xrm.PageTab<Tabs.RAV2>;
      get(name: "RELATIONSHIP_ANALYTICS_TAB"): Xrm.PageTab<Tabs.RELATIONSHIP_ANALYTICS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AIforSales extends Xrm.PageBase<AIforSales.Attributes,AIforSales.Tabs,AIforSales.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "CadenceWidgetControl"): Xrm.BaseControl;
    getControl(controlName: "Healthwidget"): Xrm.BaseControl;
    getControl(controlName: "RICONTAINER_CHARTS"): Xrm.BaseControl;
    getControl(controlName: "RICONTAINER_CHARTS1"): Xrm.BaseControl;
    getControl(controlName: "TalkingPoints"): Xrm.BaseControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "cc_1612863187947"): Xrm.BaseControl;
    getControl(controlName: "contactopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "emailaddress11"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "mobilephone1"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "parentcustomerid1"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone11"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace LivePersonaCardForm {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface LivePersonaCardForm extends Xrm.PageBase<LivePersonaCardForm.Attributes,LivePersonaCardForm.Tabs,LivePersonaCardForm.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace SocialProfiles {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "SOCIALPROFILES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "subgrid_spcontact"): Xrm.SubGridControl<"socialprofile">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialProfiles extends Xrm.PageBase<SocialProfiles.Attributes,SocialProfiles.Tabs,SocialProfiles.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "subgrid_spcontact"): Xrm.SubGridControl<"socialprofile">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.QuickCreate {
  namespace ContactQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "businesscard"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "businesscard"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactQuickCreate extends Xrm.PageBase<ContactQuickCreate.Attributes,ContactQuickCreate.Tabs,ContactQuickCreate.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "businesscard"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "businesscard"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace TimelineWallControlContactMain {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TimelineWallControlContactMain extends Xrm.PageBase<TimelineWallControlContactMain.Attributes,TimelineWallControlContactMain.Tabs,TimelineWallControlContactMain.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace RecentCasesandEntitlements {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RecentCasesandEntitlements extends Xrm.PageBase<RecentCasesandEntitlements.Attributes,RecentCasesandEntitlements.Tabs,RecentCasesandEntitlements.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ContactformforConversationCustomercard {
    namespace Tabs {
      interface CardTab extends Xrm.SectionCollectionBase {
        get(name: "Customer card"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_fullname"): Xrm.StringControl | null;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "parentcustomerid"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Card Tab"): Xrm.PageTab<Tabs.CardTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactformforConversationCustomercard extends Xrm.PageBase<ContactformforConversationCustomercard.Attributes,ContactformforConversationCustomercard.Tabs,ContactformforConversationCustomercard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "parentcustomerid"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace ContactQuickForm {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactQuickForm extends Xrm.PageBase<ContactQuickForm.Attributes,ContactQuickForm.Tabs,ContactQuickForm.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ContactforMultisessionexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_4"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RelatedCases"): Xrm.SubGridControl<"incident">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_jobtitle"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "header_telephone1"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactforMultisessionexperience extends Xrm.PageBase<ContactforMultisessionexperience.Attributes,ContactforMultisessionexperience.Tabs,ContactforMultisessionexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RelatedCases"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_jobtitle"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "header_telephone1"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace CasesforCustomer {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "CasesForCustomer"): Xrm.SubGridControl<"incident">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CasesforCustomer extends Xrm.PageBase<CasesforCustomer.Attributes,CasesforCustomer.Tabs,CasesforCustomer.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "CasesForCustomer"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace Customerprofile {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Customerprofile extends Xrm.PageBase<Customerprofile.Attributes,Customerprofile.Tabs,Customerprofile.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace accountcontactcard {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface accountcontactcard extends Xrm.PageBase<accountcontactcard.Attributes,accountcontactcard.Tabs,accountcontactcard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace AppforOutlookContactQuickView {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AppforOutlook_Contact_QV_Subgrid_1"): Xrm.BaseControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_2"): Xrm.BaseControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_3"): Xrm.BaseControl;
      get(name: "AppforOutlook_Contact_QV_Subgrid_4"): Xrm.BaseControl;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AppforOutlookContactQuickView extends Xrm.PageBase<AppforOutlookContactQuickView.Attributes,AppforOutlookContactQuickView.Tabs,AppforOutlookContactQuickView.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_1"): Xrm.BaseControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_2"): Xrm.BaseControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_3"): Xrm.BaseControl;
    getControl(controlName: "AppforOutlook_Contact_QV_Subgrid_4"): Xrm.BaseControl;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Quick {
  namespace contactcard {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface contactcard extends Xrm.PageBase<contactcard.Attributes,contactcard.Tabs,contactcard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ContactforInteractiveexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: "ref_pan_CUSTOMER_DETAILS_TAB"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "contactcasessgrid"): Xrm.BaseControl;
      get(name: "contactopportunitiesgrid"): Xrm.BaseControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_jobtitle"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "header_telephone1"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "subgrid_Entitlement"): Xrm.BaseControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactforInteractiveexperience extends Xrm.PageBase<ContactforInteractiveexperience.Attributes,ContactforInteractiveexperience.Tabs,ContactforInteractiveexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "contactcasessgrid"): Xrm.BaseControl;
    getControl(controlName: "contactopportunitiesgrid"): Xrm.BaseControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_jobtitle"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "header_telephone1"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.BaseControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace ProfileWebFormEnhancedJapanese {
    namespace Tabs {
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "adx_organizationname"): Xrm.Attribute<string>;
      get(name: "adx_publicprofilecopy"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "mspp_userpreferredlcid"): Xrm.OptionSetAttribute<powerpagelanguages>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "nickname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: "yomifirstname"): Xrm.Attribute<string>;
      get(name: "yomilastname"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "adx_organizationname"): Xrm.StringControl;
      get(name: "adx_publicprofilecopy"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mspp_userpreferredlcid"): Xrm.OptionSetControl<powerpagelanguages>;
      get(name: "nickname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: "yomifirstname"): Xrm.StringControl;
      get(name: "yomilastname"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProfileWebFormEnhancedJapanese extends Xrm.PageBase<ProfileWebFormEnhancedJapanese.Attributes,ProfileWebFormEnhancedJapanese.Tabs,ProfileWebFormEnhancedJapanese.Controls> {
    getAttribute(attributeName: "adx_organizationname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "adx_publicprofilecopy"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mspp_userpreferredlcid"): Xrm.OptionSetAttribute<powerpagelanguages>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "nickname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "yomifirstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "yomilastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "adx_organizationname"): Xrm.StringControl;
    getControl(controlName: "adx_publicprofilecopy"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mspp_userpreferredlcid"): Xrm.OptionSetControl<powerpagelanguages>;
    getControl(controlName: "nickname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: "yomifirstname"): Xrm.StringControl;
    getControl(controlName: "yomilastname"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.contact.Main {
  namespace Contact {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "BusinessCard"): Xrm.PageSection;
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "CUSTOMER_DETAILS_TAB"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_ADDRESSINPUT_SECTION"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: "TalkingPoints_section"): Xrm.PageSection;
        get(name: "WKW_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface documents_sharepoint extends Xrm.SectionCollectionBase {
        get(name: "documents_sharepoint_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "businesscard"): Xrm.Attribute<string>;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
      get(name: "TalkingPoints"): Xrm.BaseControl;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "businesscard"): Xrm.StringControl;
      get(name: "cc_1673873754954"): Xrm.BaseControl;
      get(name: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
      get(name: "contactopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "emailaddress11"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "mobilephone1"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "parentcustomerid1"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone11"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: "documents_sharepoint"): Xrm.PageTab<Tabs.documents_sharepoint>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Contact extends Xrm.PageBase<Contact.Attributes,Contact.Tabs,Contact.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "businesscard"): Xrm.Attribute<string>;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
    getControl(controlName: "TalkingPoints"): Xrm.BaseControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "businesscard"): Xrm.StringControl;
    getControl(controlName: "cc_1673873754954"): Xrm.BaseControl;
    getControl(controlName: "contactcasessgrid"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "contactopportunitiesgrid"): Xrm.SubGridControl<"opportunity">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "emailaddress11"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "mobilephone1"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "parentcustomerid1"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl<"entitlement">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone11"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
declare namespace Form.connection.Main {
  namespace Information {
    namespace Tabs {
      interface details extends Xrm.SectionCollectionBase {
        get(name: "connect_from"): Xrm.PageSection;
        get(name: "details"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface info extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "info_s"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "effectiveend"): Xrm.DateAttribute;
      get(name: "effectivestart"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "record1id"): Xrm.LookupAttribute<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
      get(name: "record1roleid"): Xrm.LookupAttribute<"connectionrole">;
      get(name: "record2id"): Xrm.LookupAttribute<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
      get(name: "record2roleid"): Xrm.LookupAttribute<"connectionrole">;
      get(name: "statecode"): Xrm.OptionSetAttribute<connection_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "effectiveend"): Xrm.DateControl;
      get(name: "effectivestart"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<connection_statecode>;
      get(name: "header_record1id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "record1id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
      get(name: "record1roleid"): Xrm.LookupControl<"connectionrole">;
      get(name: "record2id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
      get(name: "record2roleid"): Xrm.LookupControl<"connectionrole">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "info"): Xrm.PageTab<Tabs.info>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "effectiveend"): Xrm.DateAttribute;
    getAttribute(attributeName: "effectivestart"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "record1id"): Xrm.LookupAttribute<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
    getAttribute(attributeName: "record1roleid"): Xrm.LookupAttribute<"connectionrole">;
    getAttribute(attributeName: "record2id"): Xrm.LookupAttribute<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
    getAttribute(attributeName: "record2roleid"): Xrm.LookupAttribute<"connectionrole">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<connection_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "effectiveend"): Xrm.DateControl;
    getControl(controlName: "effectivestart"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<connection_statecode>;
    getControl(controlName: "header_record1id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "record1id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
    getControl(controlName: "record1roleid"): Xrm.LookupControl<"connectionrole">;
    getControl(controlName: "record2id"): Xrm.LookupControl<"account" | "activitypointer" | "adx_invitation" | "adx_inviteredemption" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "msdyn_assignmentmap" | "msdyn_assignmentrule" | "msdyn_copilottranscript" | "msdyn_customerasset" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocsession" | "msdyn_postalbum" | "msdyn_salessuggestion" | "msdyn_sequence" | "msdyn_sequencetarget" | "msdyn_suggestionprincipalobjectaccess" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse" | "mspp_publishingstatetransitionrule" | "mspp_shortcut" | "mspp_website" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "systemuser" | "task" | "team" | "territory">;
    getControl(controlName: "record2roleid"): Xrm.LookupControl<"connectionrole">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
type WebResourceImage = "LeadManagement/_imgs/ribbon/Activate_32.png"
  | "msdyn_/Icons/Entity/CustomerAssetCategory_32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/Icons/Entity/CustomerAssetCategory_16.png"
  | "msdyn_SalesTrialAppIcon"
  | "msdyn_/Icons/Entity/CustomerEquipment_32.png"
  | "msdyn_/Icons/Entity/CustomerEquipment_16.png"
  | "msdyn_/Icons/Entity/CustomerEquipment_32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/Images/AIlogo"
  | "msfp_FormsProIcon.png"
  | "msfp_FormsProEntityIcon.png"
  | "msfp_FormIcon_16_16.png"
  | "msdyn_/Images/enable_ra_to_see_health.png"
  | "msdyn_/Images/emptystate_hourlyinvestment.png"
  | "msdyn_/Images/emptystate_customerinteraction.png"
  | "msdyn_/Images/emptystate_emailengagement.png"
  | "msdyn_/Images/emptystate_emailsendreceiveratio.png"
  | "msdyn_/Images/emptystate_responsetime.png"
  | "msdyn_/Images/emptystate_relationshipactivities.png"
  | "msdyn_alansteiner"
  | "msdyn_/SalesInsightsConfig/Images/Illustration.png"
  | "msdyn_/Images/Solution_History_Icon32x32.png"
  | "msdyn_Bannerillustration.png"
  | "msdyn_flowcardtypeicon"
  | "msdyn_/SalesInsightsConfig/Images/SaveTime.png"
  | "msdyn_LeadScore_Declining_16.png"
  | "msdyn_LeadScore_Grade_A_16.png"
  | "msdyn_LeadScore_Grade_C_16.png"
  | "msdyn_LeadScore_Grade_B_16.png"
  | "msdyn_LeadScore_Grade_D_16.png"
  | "msdyn_LeadScore_Improving_16.png"
  | "msdyn_LeadScore_Notenoughinformation_16.png"
  | "msdyn_LeadScore_Steady_16.png"
  | "msdyn_smartassistkbsearchicon.png"
  | "msdyn_smartassistsimilarcaseicon.png"
  | "msdyn_/IoT/Images/IoTDeviceCommandDefinition/IoTDeviceCommandDefinition16.png"
  | "msdyn_/IoT/Images/IoTDeviceCommandDefinition/IoTDeviceCommandDefinition32.png"
  | "msdyn_/IoT/Images/IoTDeviceDataHistory/IoTDeviceDataHistory16.png"
  | "msdyn_/IoT/Images/IoTDeviceDataHistory/IoTDeviceDataHistory32.png"
  | "msdyn_/IoT/Images/IoTDeviceProperty/IoTDeviceProperty16.png"
  | "msdyn_/IoT/Images/IoTDeviceProperty/IoTDeviceProperty32.png"
  | "msdyn_/IoT/Images/IoTPropertyDefinition/IoTPropertyDefinition32.png"
  | "msdyn_/IoT/Images/IoTSettings/IoTSettings16.png"
  | "msdyn_/IoT/Images/IoTSettings/IoTSettings32.png"
  | "msdyn_/IoT/Images/IoTPropertyDefinition/IoTPropertyDefinition16.png"
  | "msdyn_/IoT/Images/IoTPullDeviceData/IoTPullDeviceData16.png"
  | "msdyn_/IoT/Images/IoTDeviceRegistration/IoTDeviceRegistration16.png"
  | "msdyn_/IoT/Images/IoTDeviceRegistration/IoTDeviceRegistration32.png"
  | "adx_identity/changecredentials_16.png"
  | "adx_identity/changecredentials_32.png"
  | "adx_identity/unlock_16.png"
  | "adx_identity/unlock_32.png"
  | "msa_adx_Sitesetting_medium"
  | "adx_icon_invitation_small"
  | "adx_icon_invitation_medium"
  | "msdyn_/AppManagementControl/images/apps.png"
  | "msdyn_/AppManagementControl/images/HorzPreloader_12x145-Blue.gif"
  | "msdyn_/AppManagementControl/images/HorzPreloader_12x145-Reverse-Blue.gif"
  | "msdyn_/AppManagementControl/images/HorzPreloader_12x145-Reverse-White.gif"
  | "msdyn_/AppManagementControl/images/HorzPreloader_12x145-White.gif"
  | "Activities/Images/SaveAsDraft16.png"
  | "Activities/Images/SendAndClose16.png"
  | "Activities/Images/SaveAsDraft32.png"
  | "Activities/Images/SendAndClose32.png"
  | "msdyn_Dynamics_icons_Sales"
  | "msdyn_LearningPath.png"
  | "msdyn_/Images/likeIcon.png"
  | "msdyn_/Images/closeUiDialogIcon.png"
  | "msdyn_/Images/healthscore_good_16.png"
  | "msdyn_/Images/healthscore_fair_16.png"
  | "msdyn_/Images/healthscore_poor_16.png"
  | "adx_Form_16.png"
  | "adx_Form_32.png"
  | "msdyn_/Images/jQueryUIIcons.png"
  | "msdyn_/Images/jQueryUIIconsHover.png"
  | "msdyn_/Images/jQueryUIIconsActive.png"
  | "msdyn_/Images/jQueryUIIconsError.png"
  | "msdyn_/Images/jQueryUIIconsHighlight.png"
  | "msdyn_/Images/firstRunArrow.png"
  | "msdyn_/Images/openIcon.png"
  | "msdyn_/Images/dialogBackground.png"
  | "msdyn_/Images/firstRunArrowRtl.png"
  | "msdyn_/IoT/Images/NavTile_icon_IOT.png"
  | "msdyn_/IoT/Images/Commands/Commands16.png"
  | "msdyn_/IoT/Images/Commands/Commands32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/IoT/Images/Commands/Commands32_white.png"
  | "msdyn_/IoT/Images/DeviceCategories/DeviceCategories16.png"
  | "msdyn_/IoT/Images/DeviceCategories/DeviceCategories32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/IoT/Images/DeviceCategories/DeviceCategories32.png"
  | "msdyn_/IoT/Images/IoTAlerts/IoTAlerts16.png"
  | "msdyn_/IoT/Images/IoTAlerts/IoTAlerts32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/IoT/Images/IoTAlerts/IoTAlerts32_white.png"
  | "msdyn_/IoT/Images/IoTDevices/IoTDevices16.png"
  | "msdyn_/IoT/Images/IoTDevices/IoTDevices32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/IoT/Images/IoTDevices/IoTDevices32.png"
  | "msdyn_/IoT/Images/OpenProcesses/OpenProcesses16.png"
  | "msdyn_/IoT/Images/RegistrationHistory/RegistrationHistory16.png"
  | "msdyn_/IoT/Images/RegistrationHistory/RegistrationHistory32/_imgs/NavBar/Invisible.gif"
  | "msdyn_/IoT/Images/RegistrationHistory/RegistrationHistory32.png"
  | "msdyn_/Images/AppModule_Default_Icon.png"
  | "msdyn_/Images/Legacy_Crm_Icon.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/shades_smile.png"
  | "msdyn_aliciathomber"
  | "msdyn_alliebellew"
  | "msdyn_davidso"
  | "msdyn_dianeprescott"
  | "msdyn_/SalesInsightsConfig/Images/SecurityRole.png"
  | "msdyn_OpenInNewWindow32"
  | "msdyn_OpenInNewWindow16"
  | "MacroDesigner/msdyn_ProductivityMacrosApplication_set_focus.png"
  | "msdyn_/SalesInsightsConfig/Images/SIAdminSettingsOptionsIcon.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/heart.png"
  | "msdyn_/Images/actions_bg_hover.png"
  | "msdyncrm_/libs/ckeditor/plugins/selectall/icons/hidpi/selectall.png"
  | "ProductManagement/_imgs/ribbon/View_Published_Products_32.png"
  | "Sales/_imgs/ribbon/Relationship_16.png"
  | "cc_MscrmControls.SalesRouting.RoutingRuleHostControl/Images/OpptyNotification.png"
  | "Service/_imgs/Ribbon/CopyContract_16.png"
  | "ProductManagement/_imgs/ribbon/Revise_16.png"
  | "Marketing/_images/MA/ReactivateResponse_16.png"
  | "msdyn_/Images/posts.png"
  | "RoutingRule/_imgs/MoveAfter_f64c_16.png"
  | "Service/_imgs/SFA/Recalculate_16.png"
  | "msdyn_/Images/CreateCadenceImage.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/copilotrefinementclose.png"
  | "cc_MscrmControls.SalesRouting.WorkAssignmentHostControl/images/CreateNewEmptyState.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Workstream.png"
  | "msdyn_/Images/healthtrend_steady_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/icons_hidpi.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/justifycenter.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Community.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/angry_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/link/images/anchor.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/italic.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/hidpi/superimage.png"
  | "msdyn_/Images/Filter_show_16.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Cadence_CompleteNew.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/FormComponent_ErrorState_FocusedView.png"
  | "msdyn_/Images/seeMoreArrows.png"
  | "ProductManagement/_imgs/ribbon/Retire_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/superimage.png"
  | "msdyncrm_/libs/ckeditor/plugins/colorbutton/icons/hidpi/textcolor.png"
  | "Sales/_imgs/sfa/AddProductIcon.svg"
  | "msdynmkt_EditorBundle/plugins/about/dialogs/hidpi/logo_ckeditor.png"
  | "msdyn_/IoT/Images/RegistrationHistory/RegistrationHistory32_white.png"
  | "Marketing/_images/MA/CopyAsCampaign_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/lock-open.png"
  | "msdyncrm_/libs/ckeditor/plugins/copyformatting/icons/hidpi/copyformatting.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/NoItems_EmptyState_D3652x.png"
  | "RoutingRule/_imgs/MoveBefore_f64d_32.png"
  | "Sales/_imgs/sfa/MarkAsWon_32.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Property_Teams.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/teeth_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/magicline/images/icon-rtl.png"
  | "msdyn_/IoT/Images/IoTDevices/IoTDevices32_white.png"
  | "AppCommon/_imgs/ico/16_approveemailofqueue.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h1.png"
  | "cc_SalesCadenceControls.CadenceMgmt.CadenceMgmtControl/images/NoItemsEmptyState.png"
  | "Service/_imgs/ribbon/AdvancedFind_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/image/images/noimage.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/sparkles.png"
  | "Service/_imgs/ribbon/BulkDelete_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/regular_smile.png"
  | "Service/_imgs/ribbon/Sharing_32.png"
  | "AppCommon/_imgs/Ribbon/EmailToCaseOfQueue_16.png"
  | "Activities/Images/SendAsAppointment_16.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/broken_heart.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/hidpi/justifyright.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/underline.png"
  | "CRM/_imgs/ico_32_1048_overridden.png"
  | "Service/_imgs/Ribbon/CreateChildCase_32.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_blockquote.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/find-rtl.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/icons_hidpi.png"
  | "cc_MscrmControls.OmniChannel.RolePersonaMappingControl/images/supervisor.png"
  | "msdyn_/Images/postbutton_rest.png"
  | "cc_MscrmControls.Analytics.TopicAutomationControl/img/PVABotIcon.png"
  | "msdyn_/Images/PostConfig_16px.png"
  | "msdyn_/Images/PostConfig_32px.png"
  | "msdyn_/Images/PostConfigRules_16px.png"
  | "msdyn_/Images/PostConfigRules_32px.png"
  | "Theme_NavBarLogo_HighContrast.png"
  | "Sales/_imgs/SFA/FulfillOrder_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/confused_smile.gif"
  | "Service/_imgs/Ribbon/CreateChildCase_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/tongue_smile.png"
  | "Marketing/_images/SFA/CopyToList_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/hidpi/superimage.png"
  | "Marketing/_images/MA/CampaignActivityDistribute_32.png"
  | "msdyn_/IoT/Images/IoTDeviceRegistration/IoTDeviceRegistration16_white.png"
  | "Service/_imgs/ribbon/resolvecase32.png"
  | "Service/_imgs/ribbon/ContractDetailsCancel_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/heart.png"
  | "Marketing/_images/Ribbon/MailMerge16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/superimage.png"
  | "msdyncrm_/libs/ckeditor/plugins/magicline/images/icon.png"
  | "msdyn_/Images/healthtrend_steady_24.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/find.png"
  | "Marketing/_images/SFA/CreateQuickCampaign_32.png"
  | "Marketing/_images/Ribbon/AddToMarketingList_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/collapsible/icons/collapsible.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h4.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/hidpi/justifycenter.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/hidpi/close.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Property_CI.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/embedmedia/icons/hidpi/embedmedia.png"
  | "RoutingRule/_imgs/MoveAfter_f64c_32.png"
  | "cc_MscrmControls.RichTextEditor.RichTextEditorControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/colorbutton/icons/hidpi/textcolor.png"
  | "msdyn_LeadScore_Loading_16.gif"
  | "cc_MsdynControls.WKWControls.ConnectionsWidget/images/wkw.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/icons.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/cut-rtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/omg_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/unsubscribe/icons/hidpi/unsubscribe.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/thumbs_down.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/icons.png"
  | "Service/_imgs/ribbon/Attachment_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/reset.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/about/dialogs/hidpi/logo_ckeditor.png"
  | "AppCommon/_imgs/Ribbon/EmailToCaseOfQueue_32.png"
  | "Service/_imgs/ribbon/ReactivateCase_16.png"
  | "cc_MscrmControls.KbEditorControl.KbEditorControl/img/preview.png"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/lock.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C04.png"
  | "msdyn_/Images/closeDateComingSoon.jpg"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/confused_smile.png"
  | "msdyncrm_/KnowledgeManagementFeatureWebResource/_imgs/ribbon/newrecord32.png"
  | "Sales/_imgs/SFA/AddAttachment_16.png"
  | "Service/_imgs/ribbon/CancelEntitelment_16.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_routing.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_div.png"
  | "Service/_imgs/ico/32_save_route.png"
  | "cc_MscrmControls.SalesRouting.RoutingRuleHostControl/Images/EmptyState.png"
  | "ProductManagement/_imgs/ribbon/Activate_32.png"
  | "ProductManagement/_imgs/ribbon/Deactivate_32.png"
  | "Sales/_imgs/ribbon/Assign_32.png"
  | "Service/_imgs/ico/16_save_route.png"
  | "Service/_imgs/Workplace/QueueItemDetails_32.png"
  | "Marketing/_images/MA/CopyAsTemplate_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/embaressed_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/hidpi/justifycenter.png"
  | "Service/_imgs/ribbon/Deactivate_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/embedmedia/icons/hidpi/embedmedia.png"
  | "Sales/_imgs/SFA/ReviseQuote_32.png"
  | "cc_SalesOmniChannel.ConversationControl/images/startConversation.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/lock.png"
  | "ProductManagement/_imgs/ribbon/Clone_16.png"
  | "Service/_imgs/ribbon/deactivate16.png"
  | "Service/_imgs/ribbon/BulkDeleteWizard_32.png"
  | "mspp_select2/select2.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/sad_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h1.png"
  | "ProductManagement/_imgs/ribbon/NewProduct_16.png"
  | "msdyn_/SalesInsightsConfig/Images/Collapse.png"
  | "msdyn_/Images/actionsArrow.png"
  | "msdyn_/SalesInsightsConfig/Images/ReadyToUse.png"
  | "cc_MscrmControls.ModernAdmin.QuickSetupWizardControl/images/Illustration_success.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/broken_heart.png"
  | "Sales/_imgs/ribbon/EditForm_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/selectall/icons/hidpi/selectall.png"
  | "msdyn_/Images/Filter_show_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/link/images/hidpi/anchor.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/cannedchat.png"
  | "Service/_imgs/Tools/TestModel_16.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/embarrassed_smile.png"
  | "Marketing/_images/SFA/AddToCampaign_16.png"
  | "cc_MscrmControls.TemplateFilterControl.TemplateFilterControl/imgs/Preview.jpg"
  | "cc_MscrmControls.ModernAdmin.OCRichObjectDesignControl/images/Create_EmptyState_Flow.png"
  | "msdyncrm_/libs/ckeditor/plugins/bidi/icons/bidirtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/hidpi/justifyleft.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Cadence_Complete.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/omg_smile.png"
  | "Marketing/_images/MA/CloseCampaignActivity_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/pastefromword/icons/hidpi/pastefromword-rtl.png"
  | "Service/_imgs/ribbon/copyshortcut32.png"
  | "msdyn_/Images/healthtrend_improving_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/templates/templates/images/template3.gif"
  | "msdynmkt_EditorBundle/plugins/image/images/noimage.png"
  | "LeadManagement/_imgs/ribbon/DetectDuplicates_16.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_collaboration.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/hidpi/find-rtl.png"
  | "msdyn_/Images/default_checkbox_cluster.png"
  | "msdyn_/Images/healthscore_notenoughinformation_16.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C03.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_pre.png"
  | "ProductManagement/_imgs/ribbon/Retire_16.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h1.png"
  | "Sales/_imgs/ribbon/convert_16.png"
  | "Sales/_imgs/ribbon/ConvertOpportunity_16.png"
  | "MarketingSales/_imgs/ribbon/DisqualifyLead_32.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/CallToast.png"
  | "msdyn_OpportunityScore_Grade_B_16.png"
  | "msdyn_/Images/actions_bg_rest.png"
  | "cc_MscrmControls.Map.MapControl/img/preview.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_channels.png"
  | "ProductManagement/_imgs/ico_32_1048_inherited.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/lightbulb.gif"
  | "Service/_imgs/ribbon/RenewEntitelment_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/paste.png"
  | "msdynmkt_EditorBundle/plugins/magicline/images/icon-rtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/lock-open.png"
  | "LeadManagement/_imgs/ribbon/DeleteSelected_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/envelope.gif"
  | "Service/_imgs/ribbon/ConvertKnowledgeArticle_16.png"
  | "ProductManagement/_imgs/ico_16_1048_inherited.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_workstreams.png"
  | "msdyn_/SalesInsightsConfig/Images/Nav_Down.png"
  | "Sales/_imgs/SFA/Suggestions_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/cannedchat.png"
  | "msdyncrm_/libs/ckeditor/plugins/link/images/hidpi/anchor.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/WQ_Lead_D365.png"
  | "cc_TeamsDialerLayoutHostControl.LayoutHostControl/Images/Error_EmptyState.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_knowledge.png"
  | "Service/_imgs/ribbon/AddNote_16.png"
  | "cc_MsdynControls.RAControls.HealthWidget/images/healthWidget.png"
  | "MarketingSales/_imgs/Workplace/remove_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/icons_hidpi.png"
  | "ProductManagement/_imgs/ribbon/Preview_32.png"
  | "msdyn_/Images/statusbar.gif"
  | "Marketing/_images/Ribbon/NoteYellowAdd32.png"
  | "Service/_imgs/ribbon/SetAsDefault_32.png"
  | "cc_MscrmControls.Slider.LinearSliderControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/close.png"
  | "Sales/_imgs/SFA/UseCurrentPricing_16.png"
  | "ProductManagement/_imgs/SFA/Reclassify_32.png"
  | "msdyn_/Images/Area_Default_Icon.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/widget/images/handle.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/hidpi/refresh.png"
  | "msdyn_/Images/yammer.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h3.png"
  | "Marketing/_images/Ribbon/AddToMarketingList_16.png"
  | "Service/_imgs/placeholders/placeholder_32.gif"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/reset.png"
  | "Sales/_imgs/SFA/GetProducts_16.png"
  | "Sales/_imgs/ribbon/recalculateopportunity32.png"
  | "Service/_imgs/Incident/Incident_origincode_icon1.png"
  | "msdyn_/Images/meeting_nodirection_16.png"
  | "cc_MscrmControls.PowerBIPCFControl/images/preview.png"
  | "ProductManagement/_imgs/ribbon/PublishProduct_32.png"
  | "msdyn_/Images/task_16.png"
  | "Sales/_imgs/ribbon/SendShortcut_32.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/thumbs_up.png"
  | "msdyn_/Images/Wall_16.png"
  | "Marketing/_images/Ribbon/Attachment_32.png"
  | "Service/_imgs/ribbon/ConvertCase_32.png"
  | "cc_MscrmControls.TeamsDialerSettings.DialerSettingsHostControl/Images/Dialer_illustration.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/googleplaystore.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/icons.png"
  | "Marketing/_images/MA/CopyListMembersToMarketingList_32.png"
  | "Service/_imgs/ribbon/SetCalendar_32.png"
  | "CRM/_imgs/ribbon/DuplicateDetection_32.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Forecast_revenue.png"
  | "Service/_imgs/ribbon/PhoneCallSupport_16.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/Success_EmptyState_D3652x.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/unsubscribe/icons/unsubscribe.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_service_scheduling.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_RelationshipAssistant.png"
  | "msdyn_/Images/info.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_p.png"
  | "Service/_imgs/ribbon/AssociateChildCase_16.png"
  | "ProductManagement/_imgs/ribbon/Revert_16.png"
  | "cc_MscrmControls.Sales.AppExtensions.AddOQOIProducts/img/Error.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/angel_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/bidi/icons/bidirtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/strike.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/link/images/hidpi/anchor.png"
  | "msdyn_/Images/actions_delete.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/confused_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/cut.png"
  | "msdyn_/SalesInsightsConfig/Images/Expand.jpg"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/about/dialogs/logo_ckeditor.png"
  | "Service/_imgs/SFA/Recalculate_32.png"
  | "cc_MscrmControls.SalesRouting.WorkAssignmentHostControl/images/WACarousel2.png"
  | "CRM/_imgs/ribbon/MergeRecords_16.png"
  | "msdyn_OpportunityScore_Grade_D_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/flash/images/placeholder.png"
  | "cc_MscrmControls.TeamsDialerSettings.DialerSettingsHostControl/Images/Phone_system_license_icon.png"
  | "Service/_imgs/ribbon/CancelIncident32.png"
  | "cc_MscrmControls.SalesRouting.WorkAssignmentHostControl/images/WACarousel3.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/lock-open.png"
  | "cc_MscrmControls.SampleEditorCustomControl.SampleEditorCustomControl/imgs/preview.png"
  | "msdyncrm_/libs/ckeditor/plugins/colorbutton/icons/bgcolor.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/Error_EmptyState_D3652x.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Property_Mobile.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/italic.png"
  | "msdyncrm_/libs/ckeditor/plugins/iframe/images/placeholder.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/devil_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/cry_smile.png"
  | "msdyn_/Images/generic_activity_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/hidpi/superimage.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/italic.png"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/lockopen.png"
  | "Service/_imgs/ribbon/Copy_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/pastefromword/icons/hidpi/pastefromword.png"
  | "cc_MscrmControls.Knob.RadialKnobControl/img/preview.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/hidpi/justifyright.png"
  | "Sales/_imgs/SFA/LockPricing_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h2.png"
  | "Service/_imgs/Ribbon/InvoiceContract_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/collapsible/icons/collapsible.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/magicline/images/icon.png"
  | "msdyn_salesIcon.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/icons_hidpi.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/underline.png"
  | "Service/_imgs/ribbon/ContractRelease_16.png"
  | "ProductManagement/_imgs/ribbon/DeleteSelected_32.png"
  | "Service/_imgs/ribbon/Assign_32.png"
  | "msdyn_Dynamics_icons_sales_teammember"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/thumbs_up.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h6.png"
  | "msdyn_/SalesInsightsConfig/Images/NotYetInstalled.png"
  | "cc_MscrmControls.SalesRouting.RoutingRuleHostControl/Images/CreateNewEmptyState.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_case_settings.png"
  | "msdyn_/Images/email_incoming_16.png"
  | "Marketing/_images/SFA/CreateOpportunityForMembers_32.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_PredictiveOpportunityScoring.png"
  | "msdyncrm_/libs/ckeditor/plugins/bidi/icons/bidiltr.png"
  | "ProductManagement/_imgs/SFA/Reclassify_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/justifyright.png"
  | "msdyn_forecastRevenue.png"
  | "cc_MscrmControls.Sales.AppExtensions.AddOQOIProducts/img/NoSelectedProducts.png"
  | "Service/_imgs/ribbon/MergeRecords_16.png"
  | "Sales/_imgs/sfa/MarkAsWon_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/unsubscribe/icons/unsubscribe.png"
  | "msdyn_OpportunityScore_Grade_C_16.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/lock-open.png"
  | "msdyn_unSelectedIcon.png"
  | "msdyn_dynamics_white_logo.png"
  | "msdyncrm_/libs/ckeditor/plugins/bidi/icons/hidpi/bidiltr.png"
  | "Marketing/_images/MA/CloseCampaignActivity_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_blockquote.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/similartopics.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellControl/WorkQueue/Images/Error_EmptyState_D3652x.png"
  | "AppCommon/_imgs/Ribbon/LaunchMailbox_16.png"
  | "cc_MscrmControls.ModernAdmin.OCVoiceOutboundProfileControl/images/emptyState.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/heart.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/arrow.png"
  | "msdyn_/Images/healthtrend_declining_16.png"
  | "cc_MscrmControls.FlipSwitch.FlipSwitchControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/emoji/assets/iconsall.png"
  | "AppCommon/_imgs/Ribbon/RejectPrimaryEmail_16.png"
  | "msdyn_/SalesInsightsConfig/Images/InProgress.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/AdminSuccess_EmptyState_D3652x.png"
  | "Service/_imgs/Workplace/QueueItemDetails_16.png"
  | "msdyn_/Images/EmptyStateImage.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellControl/WorkQueue/Images/Success_EmptyState_D3652x.png"
  | "msdyn_manageDeals.png"
  | "msdyn_/Images/phonecall_outgoing_16.png"
  | "LeadManagement/_imgs/ribbon/Deactivate_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/angel_smile.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_PredictiveForecasting.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/omg_smile.gif"
  | "Sales/_imgs/Workplace/remove_32.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/refresh.png"
  | "Service/_imgs/ribbon/newrecord32.png"
  | "ProductManagement/_imgs/ribbon/ConvertToKit_16.png"
  | "cc_MscrmControls.SalesRouting.WorkAssignmentHostControl/images/WACarousel1.png"
  | "Sales/_imgs/SFA/CancelOrder_16.png"
  | "msdyn_selectedIcon.png"
  | "Service/_imgs/ribbon/Activate_16.png"
  | "Sales/_imgs/ribbon/Relationship_32.png"
  | "msdyn_/SalesInsightsConfig/Images/RA_Cards.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/shades_smile.png"
  | "cc_MscrmControls.InputMask.InputMaskControl/img/preview.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Cadence_EmptyState.png"
  | "cc_SalesCadenceControls.CadenceMgmt.CadenceMgmtControl/images/TagManagerEmptyState.png"
  | "msdyncrm_/libs/ckeditor/plugins/selectall/icons/selectall.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/wink_smile.gif"
  | "msdyn_/SalesInsightsConfig/Images/Save_16.png"
  | "msdyn_/Images/error_16.png"
  | "LeadManagement/_imgs/ribbon/DetectAll_16.png"
  | "Service/_imgs/Ribbon/CopyContract_32.png"
  | "msdyn_/Images/phonecall_incoming_16.png"
  | "cc_MscrmControls.ActivityCalendarControl.ActivityCalendarControl/res/CalendarPreview.png"
  | "cc_MscrmControls.FieldControls.AdvancedLookupControl/img/NoResults.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Fullmobile.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/Sequences.png"
  | "cc_MscrmControls.TeamsDialerSettings.DialerSettingsHostControl/Images/Teams_license_icon.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/shades_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/bold.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/tongue_smile.png"
  | "msdyn_/Images/autosuggest_gradient.gif"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/VoiceDemo.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/subscript.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/broken_heart.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/lockopen.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/magicline/images/icon-rtl.png"
  | "LeadManagement/_imgs/Workplace/remove_32.png"
  | "mspp_select2/select2x2.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/hidpi/replace.png"
  | "Sales/_imgs/ribbon/InvoicePaid_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/spinner.gif"
  | "RoutingRule/_imgs/MoveBefore_f64d_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/strike.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/icons_hidpi.png"
  | "cc_MscrmControls.Calendar.CalendarControl/img/preview.png"
  | "msdyn_OpportunityScore_Declining_16.png"
  | "msdyncrm_/KBSearchStandalone/RightPane_EmptyState.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/sales_Trial.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/error.png"
  | "msdyn_/Images/grid_16.png"
  | "msdyn_/SalesInsightsConfig/Images/Preview_Card.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/replace.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/collapsible/icons/hidpi/collapsible.png"
  | "ProductManagement/_imgs/SFA/AddPriceListItem_16.png"
  | "cc_MscrmControls.ActivityControls.ActivityEditorControl/img/preview.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h5.png"
  | "LeadManagement/_imgs/ribbon/MergeRecords_16.png"
  | "LeadManagement/_imgs/ribbon/DetectAll_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/tongue_smile.gif"
  | "msdyncrm_/KBSearchStandalone/LeftPane_EmptyState.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_productivity.png"
  | "Sales/_imgs/ribbon/CloseQuote_16.png"
  | "cc_MscrmControls.NumberInput.NumberInputControl/img/preview.png"
  | "ProductManagement/_imgs/ribbon/ConvertToKit_32.png"
  | "cc_MscrmControls.SalesRouting.RoutingRuleHostControl/Images/AppLogo.png"
  | "cc_MscrmControls.Sales.AppExtensions.KanBanView/img/preview.png"
  | "Sales/_imgs/ribbon/edit_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/sad_smile.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/icons.png"
  | "msdyn_/Images/linkedIn_16.png"
  | "msdyn_OpportunityScore_Steady_16.png"
  | "Marketing/_images/Ribbon/ConvertLead_16.png"
  | "cc_MscrmControls.ActivityCalendarControl.ActivityCalendarControl/res/CalendarPreview.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/angel_smile.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/cry_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/embarrassed_smile.gif"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/angel_smile.png"
  | "cc_MscrmControls.ModernAdmin.QuickSetupWizardControl/images/Forum.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/superimage.png"
  | "msdyn_OpportunityScore_Improving_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/copyformatting/icons/hidpi/copyformatting.png"
  | "Sales/_imgs/SFA/ActivateQuote_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/hidpi/justifyleft.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_PredictiveLeadScoring.png"
  | "MarketingSales/_imgs/ribbon/ConvertLead_16.png"
  | "Service/_imgs/ribbon/EmailLink_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/copy-rtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/arrow.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/superscript.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/confused_smile.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_calendar.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_address.png"
  | "Service/_imgs/ribbon/Service_16.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Queue.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/lock-open.png"
  | "Marketing/_images/Ribbon/Entity16_4401.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/pastefromword/icons/pastefromword-rtl.png"
  | "cc_MscrmControls.OmniChannel.RolePersonaMappingControl/images/agent.png"
  | "Marketing/_images/Ribbon/QuickCampaign_32.png"
  | "msdyn_/Images/Subarea_Default_Icon.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Cadence_Suggestions_Coachmark_Page2.png"
  | "msdyn_/Images/Filter_hide_32.png"
  | "Marketing/_images/MA/CampaignActivityDistribute_16.png"
  | "Service/_imgs/ribbon/AssociateChildCase_32.png"
  | "msdynmkt_EditorBundle/plugins/magicline/images/hidpi/icon-rtl.png"
  | "cc_MscrmControls.WebsitePreview.PreviewControl/img/preview.png"
  | "cc_MscrmControls.Sales.AppExtensions.AddOQOIProducts/img/NewIcon.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_queues.png"
  | "msdyn_/IoT/Images/Commands/Commands16_white.png"
  | "cc_FormControls.ResponseViewGrid/img/paperclip.png"
  | "Marketing/_images/SFA/RemoveFromMarketingList_16.png"
  | "cc_MscrmControls.BulletGraph.BulletGraphControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/image/images/noimage.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C06.png"
  | "Marketing/_images/Ribbon/SelectedRecords_16.png"
  | "Fullpage_error.png"
  | "cc_MscrmControls.FieldControls.AdvancedLookupControl/img/Error.png"
  | "Sales/_imgs/ribbon/Delete_16.png"
  | "Service/_imgs/ribbon/Activate_32.png"
  | "msdyn_/SalesInsightsConfig/Images/Installed.png"
  | "cc_MscrmControls.Rating.StarRatingControl/img/preview.png"
  | "Service/_imgs/Incident/Incident_origincode_icon2.png"
  | "Service/_imgs/ribbon/ConvertKnowledgeArticle_32.png"
  | "AppCommon/_imgs/Ribbon/LaunchMailbox_32.png"
  | "msdynmkt_EditorBundle/plugins/magicline/images/hidpi/icon.png"
  | "Marketing/_images/SFA/AddToCampaign_32.png"
  | "cc_TeamsDialerRecordingWidgetControl.RecordingControl/Images/PNG_Transcript.png"
  | "Marketing/_images/MA/CopyCampaignResponse_32.png"
  | "msdyn_/SalesInsightsConfig/Images/nav_bar.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/whatchutalkingabout_smile.png"
  | "Service/_imgs/ribbon/NewRecord_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/paste-rtl.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_customer_settings.png"
  | "msdyn_/Images/Filter_16.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_insights.png"
  | "cc_MscrmControls.LeadHygiene.LeadHygieneSettingsControl/Images/LeadHygieneIllustration.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/refresh.png"
  | "Service/_imgs/ribbon/RunReport_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/templates/templates/images/template1.gif"
  | "msdyncrm_/libs/ckeditor/plugins/magicline/images/hidpi/icon.png"
  | "Marketing/_images/SFA/CopyToList_16.png"
  | "msdynmkt_EditorBundle/plugins/about/dialogs/logo_ckeditor.png"
  | "Service/_imgs/ribbon/Copy_16.png"
  | "LeadManagement/_imgs/ribbon/BulkDelete_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/close.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/close.png"
  | "msdyn_/AnyEntityRoutingRule/_imgs/32_save_route.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/refresh.png"
  | "CRM/_imgs/ico_16_1048_overridden.png"
  | "Service/_imgs/ribbon/SendEmail16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/broken_heart.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/embedmedia/icons/embedmedia.png"
  | "msdyn_/SalesInsightsConfig/Images/Connection_Insights.png"
  | "Service/_imgs/ribbon/ConvertCase_16.png"
  | "ProductManagement/_imgs/ribbon/NewProductFamily_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/lightbulb.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/hidpi/lock.png"
  | "mspp_select2/select2_spinner.gif"
  | "Service/_imgs/ribbon/copyshortcut16.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C02.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/AnalyticsSettingsNoAccess.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/italic.png"
  | "Marketing/_images/SFA/CreateOpportunityForMembers_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/teeth_smile.gif"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h5.png"
  | "Marketing/_images/SFA/ManageMembers_16.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Forum.png"
  | "msdyncrm_/libs/ckeditor/plugins/pastefromword/icons/pastefromword.png"
  | "Service/_imgs/Incident/Incident_origincode_custom.png"
  | "CRM/_imgs/ribbon/DetectAll_32.png"
  | "AppCommon/_imgs/ico/16_rejectemailofqueue.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_miscellaneous.png"
  | "Service/_imgs/ribbon/ContractRenew_32.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/lock-open.png"
  | "Service/_imgs/ribbon/SetAsDefault_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/icons.png"
  | "cc_MscrmControls.Wizard.WizardControl/Images/IoTConfigurationComplete.png"
  | "msdyn_/RIChart/Images/progress.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/link/images/anchor.png"
  | "msdyncrm_/libs/ckeditor/plugins/pagebreak/images/pagebreak.gif"
  | "Activities/Images/EmptyState.png"
  | "Marketing/_images/Ribbon/AddEmail_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/selectall/icons/selectall.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/underline.png"
  | "cc_MscrmControls.Segment.SegmentHostControl/images/CreateNewEmptyState.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/userattributes.png"
  | "msdyncrm_/libs/ckeditor/plugins/templates/templates/images/template2.gif"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_p.png"
  | "msdyn_/AnyEntityRoutingRule/_imgs/16_save_route.png"
  | "cc_MscrmControls.Wizard.WizardControl/Images/IoTConfigurationLoading.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/envelope.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/lockopen.png"
  | "Service/_imgs/ribbon/Assign_16.png"
  | "Service/_imgs/ribbon/Edit_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/bold.png"
  | "msdyncrm_/libs/ckeditor/plugins/blockquote/icons/hidpi/blockquote.png"
  | "Marketing/_images/MA/CopyAsTemplate_16.png"
  | "Marketing/_images/Ribbon/CopyToStatic_16.png"
  | "Service/_imgs/ribbon/SendShortcut_32.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/WQ_Lead_Opty_D365.png"
  | "msdyncrm_/libs/ckeditor/plugins/bidi/icons/hidpi/bidirtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/superimage/icons/lock.png"
  | "Service/_imgs/ribbon/AddToQueue_16.png"
  | "msdyn_/Images/AllSecurityRoles.jpg"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/emoji/assets/iconsall.png"
  | "Service/_imgs/Incident/Incident_origincode_icon.png"
  | "MarketingSales/_imgs/ribbon/ConvertLead_32.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/sad_smile.png"
  | "Service/_imgs/ribbon/CaseCancel_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/preview/images/pagebreak.gif"
  | "cc_MscrmControls.Knob.ArcKnobControl/img/preview.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/hidpi/refresh.png"
  | "Marketing/_images/Ribbon/SelectedRecords_32.png"
  | "msdyn_automateSales.png"
  | "cc_SalesCadenceControls.CadenceMgmt.CadenceMgmtControl/images/CreateNewSequenceEmptyState.png"
  | "ProductManagement/_imgs/ribbon/ConvertToProduct_32.png"
  | "cc_MscrmControls.FieldControls.CCFadminsettings/img/AddProducts_Illustration.png"
  | "msdyn_/Images/bg_gradient.png"
  | "Service/_imgs/ribbon/Save_16.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/lock.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/link/images/anchor.png"
  | "Service/_imgs/ribbon/CopyView_32.png"
  | "msdyn_/SalesInsightsConfig/Images/Cancel_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/thumbs_up.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/subscript.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Widget_EmptyState_New.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_div.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/whatsnew.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/supervisorsettings.png"
  | "msdyn_OpportunityScore_Notenoughinformation_16.png"
  | "AppCommon/_imgs/Ribbon/ApprovePrimaryEmail_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/embedmedia/icons/embedmedia.png"
  | "Marketing/_images/Ribbon/AllRecordsAllPages_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_address.png"
  | "Marketing/_images/Ribbon/ShowAddExistingForCampActivity_32.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/wink_smile.png"
  | "Sales/_imgs/SFA/SendAsEmail_32.png"
  | "msdyn_/SalesInsightsConfig/Images/SIAppTile.png"
  | "msdyn_/SalesInsightsConfig/Images/similaropportunitiesicon.png"
  | "ProductManagement/_imgs/ribbon/Overwrite_16.png"
  | "ProductManagement/_imgs/ribbon/View_Published_Products_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/cut.png"
  | "Service/_imgs/Ribbon/Contract_Invoice_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/find.png"
  | "LeadManagement/_imgs/ribbon/MergeRecords_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/superimage/icons/cannedchat.png"
  | "msdyn_LeadScore_PreviewBannerIcon.png"
  | "msdyn_cec_dynamics_white_logo.png"
  | "ProductManagement/_imgs/ribbon/Preview_16.png"
  | "msdyn_/Images/fax_outgoing_16.png"
  | "Marketing/_images/SFA/CreateQuickCampaign_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h6.png"
  | "msdyn_/Images/chevron_sm.png"
  | "Service/_imgs/entitlement/ico_16_9704.png"
  | "cc_MscrmControls.TeamsDialerSettings.DialerSettingsHostControl/Images/CI_image_draft.png"
  | "CRM/_imgs/ribbon/DetectAll_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/copilotrefinement.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/icons_hidpi.png"
  | "msdyn_LinkToConversationCommandButtonIcon.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/bold.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_ConnectionInsights.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_workforce_management.png"
  | "msdyncrm_/libs/ckeditor/plugins/icons.png"
  | "Sales/_imgs/SFA/CancelInvoice_16.png"
  | "Service/_imgs/ribbon/SetCalendar_16.png"
  | "Sales/_imgs/sfa/Recalculate_16.png"
  | "msdyn_/Images/16_Yammer_enable.png"
  | "ProductManagement/_imgs/SFA/AddPriceListItem_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/preview/images/pagebreak.gif"
  | "msdyn_/SalesInsightsConfig/Images/failed.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/Cadence_Suggestions_Coachmark_Page3.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/paste.png"
  | "ProductManagement/_imgs/ribbon/ConvertToProduct_16.png"
  | "LeadManagement/_imgs/ribbon/Deactivate_32.png"
  | "MarketingSales/_imgs/ribbon/ConvertResponse_16.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/lightbulb.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/envelope.png"
  | "Marketing/_images/Ribbon/AddNote_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/reset.png"
  | "Sales/_imgs/ribbon/CreateRelatedOpportunity_16.png"
  | "cc_MscrmControls.TeamsDialerSettings.DialerSettingsHostControl/Images/SA_image_draft.png"
  | "Sales/_imgs/SFA/CancelOrder_32.png"
  | "ProductManagement/_imgs/ribbon/Revise_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/about/dialogs/logo_ckeditor.png"
  | "Sales/_imgs/sfa/CreateInvoice_16.png"
  | "LeadManagement/_imgs/ribbon/DuplicateDetection_32.png"
  | "cc_TeamsDialerRecordingWidgetControl.RecordingControl/Images/PNG_Record.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_AutoCapture.png"
  | "Service/_imgs/ribbon/ContractRelease_32.png"
  | "msdyn_/Images/32_Yammer_disable.png"
  | "Service/_imgs/ribbon/Email_32.png"
  | "msdyn_/Images/settings_cluster.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/justifyblock.png"
  | "Marketing/_images/MA/ReactivateCampaignResponse_32.png"
  | "msdyn_/Images/healthtrend_declining_24.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Accelerate_sales.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/hidpi/find.png"
  | "Activities/Images/SendAsAppointment_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/regular_smile.png"
  | "LeadManagement/_imgs/ribbon/BulkDeleteWizard_32.png"
  | "msdyn_/Images/postbutton_disabled.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/omg_smile.png"
  | "Sales/_imgs/SFA/CreateOrder_32.png"
  | "Service/_imgs/ribbon/MergeRecords_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/refresh.png"
  | "Service/_imgs/Incident/Incident_origincode_icon4.png"
  | "Sales/_imgs/sfa/MarkAsLost_16.png"
  | "ProductManagement/_imgs/ribbon/PublishProduct_16.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C01.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/spinner.gif"
  | "cc_Sales.Controls.CopilotSummaryWidget/images/recordSummary.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/superscript.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h3.png"
  | "Service/_imgs/ribbon/runreport32.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/WQ_Opty_D365.png"
  | "msdyn_/Images/postbutton_hover.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/thumbs_down.png"
  | "msdynmkt_EditorBundle/plugins/iframe/images/placeholder.png"
  | "Service/_imgs/ribbon/New_Entitlement_Template_16.png"
  | "msdyn_/AnyEntityRoutingRule/_imgs/16_routecase.png"
  | "ProductManagement/_imgs/ribbon/Revert_32.png"
  | "cc_MscrmControls.OmniChannel.RolePersonaMappingControl/images/admin.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h4.png"
  | "Service/_imgs/ribbon/ContractHold_32.png"
  | "msdyn_/Images/MoveDown_16.png"
  | "msdyn_/Images/healthtrend_improving_24.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/refresh.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/knowledge.png"
  | "msdyncrm_/libs/ckeditor/plugins/unsubscribe/icons/unsubscribe.png"
  | "msdyn_/Images/letter_outgoing_16.png"
  | "Sales/_imgs/SFA/LookupAddress_32.png"
  | "ProductManagement/_imgs/ribbon/Overwrite_32.png"
  | "Sales/_imgs/SFA/Suggestions_32.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/whatchutalkingabout_smile.png"
  | "Sales/_imgs/ribbon/PrintQuoteForCustomer_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/hidpi/justifyblock.png"
  | "Sales/_imgs/ribbon/PrintQuoteForCustomer_16.png"
  | "Service/_imgs/SFA/CancelInvoice_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/copyformatting/icons/copyformatting.png"
  | "msdyncrm_/libs/ckeditor/plugins/showblocks/images/block_h2.png"
  | "LinkedInExtensions/LinkedInRaCard/_imgs/msdyn_LinkedInLogo.png"
  | "CRM/_imgs/ribbon/Overwrite_32.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/icons.png"
  | "Service/_imgs/Incident/Incident_origincode_icon3.png"
  | "Marketing/_images/Ribbon/Email_32.png"
  | "Service/_imgs/ribbon/SendView_16.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/teeth_smile.png"
  | "cc_MscrmControls.FieldControls.ImageControl/img/preview.png"
  | "ProductManagement/_imgs/ribbon/Clone_32.png"
  | "AppCommon/_imgs/Workplace/ConvertActivity_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/refresh.png"
  | "CRM/_imgs/ribbon/DetectDuplicates_16.png"
  | "msdynmkt_EditorBundle/plugins/widget/dev/assets/simplebox/icons/simplebox.png"
  | "MarketingSales/_imgs/ribbon/DisqualifyLead_16.png"
  | "ProductManagement/_imgs/ribbon/NewProduct_32.png"
  | "Marketing/_images/Ribbon/MailMerge32.png"
  | "msdyn_/Images/tearup.png"
  | "msdyn_/IoT/Images/IoTCentral.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Illustration_quick_setup.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/lock.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h3.png"
  | "Sales/_imgs/ribbon/ReopenOpportunity_32.png"
  | "AppCommon/_imgs/Workplace/ConvertActivity_16.png"
  | "Sales/_imgs/SFA/SendAsEmail_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/whatchutalkingabout_smile.gif"
  | "msdyn_LeadScore_ModelCreationComplete.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_p.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/tounge_smile.gif"
  | "cc_MscrmControls.FieldControls.CheckboxControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/lock.png"
  | "msdyncrm_/libs/ckeditor/plugins/magicline/images/hidpi/icon-rtl.png"
  | "msdyn_/Images/SecurityRole.jpg"
  | "msdyn_/Images/MoveUp_32.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellControl/WorkQueue/Images/RecordImageDesignerPreview.png"
  | "Service/_imgs/ribbon/noteyellowadd32.png"
  | "msdyn_/Images/progressbar.gif"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/arrow.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/justifyblock.png"
  | "msdyncrm_/libs/ckeditor/plugins/about/dialogs/logo_ckeditor.png"
  | "Marketing/_images/MA/CopyAsCampaign_16.png"
  | "Sales/_imgs/ribbon/Opportunity_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/bold.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/Teams_Logo.png"
  | "Service/_imgs/ribbon/Deactivate_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/image/images/noimage.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/paste-rtl.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/SequencesHover.png"
  | "cc_MscrmControls.FieldControls.ToggleControl/img/preview.png"
  | "Sales/_imgs/ribbon/convert_32.png"
  | "Sales/_imgs/ribbon/ConvertOpportunity_32.png"
  | "msdyn_/SalesInsightsConfig/Images/information.png"
  | "Service/_imgs/Tools/Build_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_pre.png"
  | "msdyn_getToKnowD365.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/copy.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/lightbulb.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/iframe/images/placeholder.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/Worklist_NetworkError_FocusedView.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/copilotrefinementclose.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Mobile_Modal_with_QR.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/blockquote/icons/hidpi/blockquote.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C07.png"
  | "MarketingSales/_imgs/ribbon/ConvertCampaignResponse_32.png"
  | "msdyn_LeadScore_ModelInProgressIcon.png"
  | "msdyn_/Images/meeting_incoming_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/justifycenter.png"
  | "Sales/_imgs/sfa/MarkAsLost_32.png"
  | "Marketing/_images/Ribbon/Attachment_16.png"
  | "cc_SalesCadenceControls.CadenceMgmt.CadenceMgmtControl/images/Lighthouse.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Mobile_Modal.png"
  | "cc_MscrmControls.Sales.AppExtensions.AddOQOIProducts/img/NoProducts.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png"
  | "Service/_imgs/ribbon/Share_16.png"
  | "msdyn_/Images/spimn.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/kiss.png"
  | "Sales/_imgs/email/empty_folder_drop.png"
  | "Service/_imgs/ribbon/Entity32_4201.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/hidpi/replace.png"
  | "Marketing/_images/SFA/ManageMembers_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/strike.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/SA_Illustration.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/colorbutton/icons/hidpi/bgcolor.png"
  | "Service/_imgs/ribbon/ContractDetailsCancel_16.png"
  | "msdyn_/Images/error_message.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_SalesInsights.png"
  | "msdyn_/Images/16_Yammer_disable.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/hidpi/lock-open.png"
  | "msdyn_/SalesInsightsConfig/Images/Installing.png"
  | "Sales/_imgs/SFA/Recalculate_32.png"
  | "Marketing/_images/Ribbon/Entity32_4401.png"
  | "ProductManagement/_imgs/ico_16_1048_overridden.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/justifyleft.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/magicline/images/hidpi/icon-rtl.png"
  | "cc_MscrmControls.Timeline.TimelineControl/img/preview.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellControl/WorkQueue/Images/AdminSuccess_EmptyState_D3652x.png"
  | "Service/_imgs/ribbon/Attachment_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/justifyleft.png"
  | "msdyncrm_/libs/ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png"
  | "Service/_imgs/ribbon/AddToQueue_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/checkmark.png"
  | "Sales/_imgs/ribbon/Opportunity_16.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/Manage_opportunities.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/regular_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/subscript.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/bidi/icons/hidpi/bidiltr.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/pastefromword/icons/hidpi/pastefromword-rtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/superimage/icons/lock.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/heart.gif"
  | "msdyn_/Images/email_outgoing_16.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/CustomDialer.png"
  | "Sales/_imgs/SFA/ReviseQuote_16.png"
  | "msa_adx_sitesetting_small"
  | "msdynmkt_EditorBundle/plugins/smiley/images/thumbs_down.png"
  | "LeadManagement/_imgs/ribbon/Delete_16.png"
  | "Sales/_imgs/SFA/UseCurrentPricing_32.png"
  | "msdyn_accelerateSales.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/close.png"
  | "Service/_imgs/ribbon/CopyView_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/kiss.gif"
  | "cc_MscrmControls.Multimedia.MultimediaPlayerControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/bidi/icons/bidiltr.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/hidpi/error.png"
  | "msdyn_/Images/refresh.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/devil_smile.png"
  | "msdyn_/Images/Filter_hide_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/copilotrefinement.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/unsubscribe/icons/hidpi/unsubscribe.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/sad_smile.png"
  | "cc_Intelligence.BusinessCardReaderControl.BusinessCardReader/img/preview.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/Illustration_success.png"
  | "cc_MscrmControls.ModernAdmin.URRecordRoutingControl/images/RecordRouting.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_blockquote.png"
  | "msdyn_/Images/fax_incoming_16.png"
  | "Sales/_imgs/ribbon/InvoicePaid_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/blockquote/icons/blockquote.png"
  | "Theme_NavBarLogo.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/wink_smile.png"
  | "cc_MscrmControls.FieldControls.FileControl/img/preview.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/spinner.gif"
  | "Sales/_imgs/ribbon/SendShortcut_16.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/hidpi/lock.png"
  | "Service/_imgs/ribbon/advancedfind32.png"
  | "Sales/_imgs/ribbon/CloseQuote_32.png"
  | "MarketingSales/_imgs/ribbon/BulkDelete_16.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/RecordImageDesignerPreview.png"
  | "cc_MscrmControls.Wizard.WizardControl/Images/IoTConfigurationError.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/singleMobile.png"
  | "msdyn_/Images/MoveUp_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/thumbs_down.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/skins/superowa/images/notificationclose.png"
  | "msdyn_/Images/meeting_outgoing_16.png"
  | "Service/_imgs/ribbon/ResolveCase_16.png"
  | "Service/_imgs/Workplace/remove_32.png"
  | "msdynmkt_EditorBundle/plugins/emoji/assets/iconsall.png"
  | "Sales/_imgs/SFA/GetProducts_32.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h6.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/envelope.png"
  | "msdyn_/Images/progress.gif"
  | "msdyn_LeadScore_ModelCreationFailed.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/close.png"
  | "cc_MscrmControls.LeadHygiene.LeadHygieneDuplicateDialogControl/Images/LoadFailed.png"
  | "msdyncrm_/libs/ckeditor/plugins/justify/icons/hidpi/justifyblock.png"
  | "Marketing/_images/MA/CopyCampaignResponse_16.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_address.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_div.png"
  | "Sales/_imgs/SFA/ActivateQuote_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/magicline/images/icon.png"
  | "ProductManagement/_imgs/ribbon/Publish_Hierarchy_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/devil_smile.png"
  | "MarketingSales/_imgs/ribbon/ReactivateLead_16.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h4.png"
  | "CRM/_imgs/ribbon/Overwrite_16.png"
  | "Sales/_imgs/sfa/CreateInvoice_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/embarrassed_smile.png"
  | "LeadManagement/_imgs/ribbon/DeleteSelected_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/flash/images/placeholder.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_RelationshipAnalytics.png"
  | "Service/_imgs/ribbon/appointment_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/showblocks/images/block_h5.png"
  | "Service/_imgs/ribbon/Delete_16.png"
  | "Sales/_imgs/ribbon/SubmitOrder_16.png"
  | "Sales/_imgs/ribbon/edit32.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/noSearchResults.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/angry_smile.png"
  | "Marketing/_images/MA/NewTemplate_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/notificationclose.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/hidpi/find.png"
  | "Service/_imgs/ribbon/SendView_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/embedmedia/icons/embedmedia.png"
  | "msdyncrm_/KnowledgeManagementFeatureWebResource/_imgs/ribbon/NewRecord_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/superscript.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/close.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/magicline/images/hidpi/icon-rtl.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/arrow.png"
  | "Service/_imgs/ribbon/Save_32.png"
  | "msdyn_/Images/default_user_image.png"
  | "Service/_imgs/ribbon/ReactivateCase_32.png"
  | "msdyn_/Images/actions_bg_rest.gif"
  | "MarketingSales/_imgs/ribbon/Delete_16.png"
  | "Marketing/_images/Ribbon/QuickCampaign_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/devil_smile.gif"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_workspaces.png"
  | "msdyncrm_/libs/ckeditor/plugins/forms/images/hiddenfield.gif"
  | "ProductManagement/_imgs/ribbon/BundleProduct_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/pastefromword/icons/hidpi/pastefromword.png"
  | "Service/_imgs/ribbon/BulkDelete_32.png"
  | "cc_MscrmControls.Signature.SignatureControl/img/preview.png"
  | "Sales/_imgs/ribbon/formdesign16.png"
  | "msdyn_/Images/buttonBackground.png"
  | "Sales/_imgs/ribbon/SubmitOrder_32.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/customersettings.png"
  | "Marketing/_images/Ribbon/ConvertLead_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/checkmark.png"
  | "msdyn_/Images/MoveDown_32.png"
  | "msdyn_/Images/32_Yammer_enable.png"
  | "msdyncrm_/libs/ckeditor/skins/superowa/images/lock.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/thumbs_up.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/ContactCenterIllustration.png"
  | "Service/_imgs/ribbon/Phone_Case_32.png"
  | "msdyn_/Images/Subarea_Webresource_Default_Icon.png"
  | "msdynmkt_EditorBundle/plugins/magicline/images/icon.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/cry_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/copyformatting/icons/copyformatting.png"
  | "Service/_imgs/ribbon/ManageMembers_16.png"
  | "cc_MscrmControls.Swarm.SwarmAdminToggleControl/Images/Swarm_quick_setup_banner.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellControl/WorkQueue/Images/NoItems_EmptyState_D3652x.png"
  | "Marketing/_images/Ribbon/AllRecords_16.png"
  | "Marketing/_images/MA/CopyListMembersToMarketingList_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/hidpi/underline.png"
  | "msdyn_/SalesInsightsConfig/Images/Status.png"
  | "Service/_imgs/Incident/Incident_origincode_icon5.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/teeth_smile.png"
  | "ProductManagement/_imgs/ribbon/BundleProduct_32.png"
  | "cc_MscrmControls.AutoComplete.AutoCompleteControl/img/preview.png"
  | "ProductManagement/_imgs/ribbon/DeleteSelected_16.png"
  | "msdyn_/Images/default_user_image_small.png"
  | "Marketing/_images/Ribbon/CopyToStatic_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/colorbutton/icons/hidpi/bgcolor.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/magicline/images/icon-rtl.png"
  | "ProductManagement/_imgs/ico_32_1048_overridden.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/angry_smile.gif"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/replace.png"
  | "cc_MscrmControls.OptionSet.OptionSetControl/img/preview.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/regular_smile.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/pastefromword/icons/pastefromword.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/embarrassed_smile.png"
  | "cc_SalesCadenceControls.CadenceMgmt.CadenceMgmtControl/images/NoItemsEmptyStateGeneric.png"
  | "cc_MscrmControls.Grid.ReadOnlyGrid/img/preview.png"
  | "Sales/_imgs/SFA/AddAttachment_32.png"
  | "cc_MscrmControls.TemplateGalleryHostControl.TemplateGalleryHostControl/imgs/Preview.jpg"
  | "CRM/_imgs/ribbon/MergeRecords_32.png"
  | "msdyn_/IoT/Images/IoTPullDeviceData/IoTPullDeviceData16_white.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/sparkles.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/angry_smile.png"
  | "Service/_imgs/SFA/CancelInvoice_16.png"
  | "cc_PowerApps.CoreControls.Checkbox/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/collapsible/icons/hidpi/collapsible.png"
  | "msdyn_/Images/IntroBanner.jpg"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/basicstyles/icons/subscript.png"
  | "Service/_imgs/ribbon/ContractHold_16.png"
  | "Service/_imgs/ico/16_routecase.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/copy-rtl.png"
  | "cc_MscrmControls.Sales.AppExtensions.AddOQOIProducts/img/EmptyState.png"
  | "Sales/_imgs/SFA/LockPricing_16.png"
  | "cc_MscrmControls.Grid.GridControl/img/preview.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/icons_hidpi.png"
  | "msdyncrm_/libs/ckeditor/plugins/colorbutton/icons/textcolor.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_NotesAnalysis.png"
  | "ProductManagement/_imgs/ribbon/NewProductBundlePopup_32.png"
  | "cc_MscrmControls.AcceleratedSales.AnchorShellGridControl/WorkQueue/Images/NoItems_EmptyState_D3652x.png"
  | "msdyn_/SalesInsightsConfig/Images/ReadyForConfiguration.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/blockquote/icons/blockquote.png"
  | "Sales/_imgs/ribbon/CreateRelatedOpportunity_32.png"
  | "Sales/_imgs/Tools/ico_discount.gif"
  | "Sales/_imgs/Tools/Build_16.png"
  | "Sales/_imgs/Tools/TestModel_16.png"
  | "LeadManagement/_imgs/ribbon/Activate_16.png"
  | "cc_MscrmControls.LinearGauge.LinearGaugeControl/img/preview.png"
  | "Marketing/_images/Ribbon/AllRecordsAllPages_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/colorbutton/icons/bgcolor.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/whatchutalkingabout_smile.png"
  | "msdyn_/Icons/UpgradeRun_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/magicline/images/hidpi/icon.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/cry_smile.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/widget/images/handle.png"
  | "msdyn_/Images/LikeTopTriangle.png"
  | "Sales/_imgs/ribbon/CustomerRelationship_16.png"
  | "msdyn_/Images/help.png"
  | "CustomerServiceHub/_imgs/Sitemap/knowledge_grid.gif"
  | "cc_MscrmControls.DynamicListSubgrid.DynamicListSubgridControl/img/preview.png"
  | "Sales/_imgs/SFA/LookupAddress_16.png"
  | "cc_MscrmControls.SalesTrialLandingPage.SalesTrialLandingPageControl/img/appleappstore.png"
  | "msdyncrm_/libs/ckeditor/plugins/smiley/images/kiss.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_service_terms.png"
  | "MarketingSales/_imgs/ribbon/ReactivateLead_32.png"
  | "cc_MscrmControls.AcceleratedSales.CadenceWidgetControl/Images/preview.png"
  | "msdyn_/SalesInsightsConfig/Images/Images_EmailEngagement.png"
  | "msdyn_/IoT/Images/DeviceCategories/DeviceCategories32_white.png"
  | "cc_Sales.Controls.CopilotControl/images/NoPivotEnabled.png"
  | "Marketing/_images/MA/NewTemplate_16.png"
  | "Marketing/_images/SFA/RemoveFromMarketingList_32.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/skins/superowa/images/hidpi/lock.png"
  | "cc_MscrmControls.OmniChannel.OCConversationWrapperControl/images/TranscriptNotAvailable.png"
  | "Sales/_imgs/ribbon/CreateRelatedCustomerRelationship_32.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/hidpi/lock-open.png"
  | "msdyncrm_/libs/ckeditor/skins/moono-lisa/images/hidpi/close.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/bidi/icons/hidpi/bidirtl.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/colorbutton/icons/textcolor.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/find/icons/hidpi/find-rtl.png"
  | "msdyn_OpportunityScore_Loading_16.gif"
  | "msdynmkt_EditorBundle/plugins/smiley/images/tongue_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/pastefromword/icons/pastefromword-rtl.png"
  | "ProductManagement/_imgs/ribbon/Publish_Hierarchy_32.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_h2.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/smiley/images/wink_smile.png"
  | "Sales/_imgs/SFA/CancelInvoice_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/hidpi/cut-rtl.png"
  | "Sales/_imgs/SFA/CreateOrder_16.png"
  | "msdynmkt_EditorBundle/plugins/widget/images/handle.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/agentexperience.png"
  | "Service/_imgs/Tools/ScheduleBuild_16.png"
  | "msdyn_OpportunityScore_Grade_A_16.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/strike.png"
  | "MarketingSales/_imgs/ribbon/BulkDeleteWizard_32.png"
  | "ProductManagement/_imgs/ribbon/NewProductFamily_32.png"
  | "Sales/_imgs/SFA/FulfillOrder_32.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/FRE.png"
  | "Marketing/_images/Ribbon/ShowAddExistingForCampActivity_16.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/justify/icons/justifyright.png"
  | "msdyncrm_/libs/ckeditor/plugins/basicstyles/icons/hidpi/superscript.png"
  | "Service/_imgs/entitlement/ico_32_9704.png"
  | "Service/_imgs/ribbon/edit32.png"
  | "msdyn_/IoT/Images/CreateFlow/Flow16.png"
  | "Sales/_imgs/ribbon/ReopenOpportunity_16.png"
  | "cc_MscrmControls.ModernAdmin.OCAdminConfigurationControl/images/ChatDemo.png"
  | "cc_MscrmControls.ModernAdmin.OCGlobalSettingsControl/images/Illustration_user_management.png"
  | "msdyn_/Images/letter_incoming_16.png"
  | "msdynmkt_EditorBundle/plugins/showblocks/images/block_pre.png"
  | "Service/_imgs/ribbon/entity32_4212.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/shades_smile.png"
  | "msdyncrm_/libs/ckeditor/plugins/clipboard/icons/copy.png"
  | "ProductManagement/_imgs/ribbon/Deactivate_16.png"
  | "ProductManagement/_imgs/ribbon/Activate_16.png"
  | "Sales/_imgs/ribbon/Assign_16.png"
  | "Sales/_imgs/placeholders/placeholder_32.gif"
  | "Marketing/_images/Ribbon/AllRecords_32.png"
  | "msdyncrm_/libs/ckeditor/plugins/find/icons/find-rtl.png"
  | "Service/_imgs/ribbon/ContractRenew_16.png"
  | "msdynmkt_EditorBundle/plugins/smiley/images/kiss.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor/plugins/magicline/images/hidpi/icon.png"
  | "cc_MscrmControls.AcceleratedSales.SalesAccelerationSettingsControl/Images/C05.png"
  | "msdyn_/RichTextEditorControl/libs/ckeditor_latest/plugins/unsubscribe/icons/hidpi/unsubscribe.png"
  | "msdyn_/Images/healthtrend_notenoughinformation_16.png"
declare const enum LCID {
  English = 1033,
}
interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface BulkOperationLog_Base extends WebEntity {
}
interface BulkOperationLog_Fixed extends WebEntity_Fixed {
  bulkoperationlogid: string;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Relationships {
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_FormattedResult {
}
interface BulkOperationLog_Select {
}
interface BulkOperationLog_Expand {
}
interface BulkOperationLog_Filter {
}
interface BulkOperationLog_Create extends BulkOperationLog {
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface msdyn_accountkpiitem_Base extends WebEntity {
}
interface msdyn_accountkpiitem_Fixed extends WebEntity_Fixed {
  msdyn_accountkpiitemid: string;
}
interface msdyn_accountkpiitem extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_Result extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
}
interface msdyn_accountkpiitem_FormattedResult {
}
interface msdyn_accountkpiitem_Select {
}
interface msdyn_accountkpiitem_Expand {
}
interface msdyn_accountkpiitem_Filter {
}
interface msdyn_accountkpiitem_Create extends msdyn_accountkpiitem {
}
interface msdyn_accountkpiitem_Update extends msdyn_accountkpiitem {
}
interface msdyn_contactkpiitem_Base extends WebEntity {
}
interface msdyn_contactkpiitem_Fixed extends WebEntity_Fixed {
  msdyn_contactkpiitemid: string;
}
interface msdyn_contactkpiitem extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_Result extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
}
interface msdyn_contactkpiitem_FormattedResult {
}
interface msdyn_contactkpiitem_Select {
}
interface msdyn_contactkpiitem_Expand {
}
interface msdyn_contactkpiitem_Filter {
}
interface msdyn_contactkpiitem_Create extends msdyn_contactkpiitem {
}
interface msdyn_contactkpiitem_Update extends msdyn_contactkpiitem {
}
interface Account_Base extends WebEntity {
  accountcategorycode?: account_accountcategorycode | null;
  accountclassificationcode?: account_accountclassificationcode | null;
  accountid?: string | null;
  accountnumber?: string | null;
  accountratingcode?: account_accountratingcode | null;
  address1_addressid?: string | null;
  address1_addresstypecode?: account_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_composite?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_freighttermscode?: account_address1_freighttermscode | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_primarycontactname?: string | null;
  address1_shippingmethodcode?: account_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: account_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_composite?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_freighttermscode?: account_address2_freighttermscode | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_primarycontactname?: string | null;
  address2_shippingmethodcode?: account_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  adx_createdbyipaddress?: string | null;
  adx_createdbyusername?: string | null;
  adx_modifiedbyipaddress?: string | null;
  adx_modifiedbyusername?: string | null;
  aging30?: number | null;
  aging30_base?: number | null;
  aging60?: number | null;
  aging60_base?: number | null;
  aging90?: number | null;
  aging90_base?: number | null;
  businesstypecode?: account_businesstypecode | null;
  createdon?: Date | null;
  creditlimit?: number | null;
  creditlimit_base?: number | null;
  creditonhold?: boolean | null;
  customersizecode?: account_customersizecode | null;
  customertypecode?: account_customertypecode | null;
  description?: string | null;
  donotbulkemail?: boolean | null;
  donotbulkpostalmail?: boolean | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  donotsendmm?: boolean | null;
  emailaddress1?: string | null;
  emailaddress2?: string | null;
  emailaddress3?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  fax?: string | null;
  followemail?: boolean | null;
  ftpsiteurl?: string | null;
  importsequencenumber?: number | null;
  industrycode?: account_industrycode | null;
  isprivate?: boolean | null;
  lastonholdtime?: Date | null;
  lastusedincampaign?: Date | null;
  marketcap?: number | null;
  marketcap_base?: number | null;
  marketingonly?: boolean | null;
  merged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_gdproptout?: boolean | null;
  name?: string | null;
  numberofemployees?: number | null;
  onholdtime?: number | null;
  opendeals?: number | null;
  opendeals_date?: Date | null;
  opendeals_state?: number | null;
  openrevenue?: number | null;
  openrevenue_base?: number | null;
  openrevenue_date?: Date | null;
  openrevenue_state?: number | null;
  overriddencreatedon?: Date | null;
  ownershipcode?: account_ownershipcode | null;
  participatesinworkflow?: boolean | null;
  paymenttermscode?: account_paymenttermscode | null;
  preferredappointmentdaycode?: account_preferredappointmentdaycode | null;
  preferredappointmenttimecode?: account_preferredappointmenttimecode | null;
  preferredcontactmethodcode?: account_preferredcontactmethodcode | null;
  primarysatoriid?: string | null;
  primarytwitterid?: string | null;
  processid?: string | null;
  revenue?: number | null;
  revenue_base?: number | null;
  sharesoutstanding?: number | null;
  shippingmethodcode?: account_shippingmethodcode | null;
  sic?: string | null;
  stageid?: string | null;
  statecode?: account_statecode | null;
  statuscode?: account_statuscode | null;
  stockexchange?: string | null;
  teamsfollowed?: number | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  territorycode?: account_territorycode | null;
  tickersymbol?: string | null;
  timespentbymeonemailandmeetings?: string | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  websiteurl?: string | null;
}
interface Account_Relationships {
  CreatedAccount_BulkOperationLogs2?: BulkOperationLog_Result[] | null;
  SourceAccount_BulkOperationLogs?: BulkOperationLog_Result[] | null;
  account_activity_parties?: ActivityParty_Result[] | null;
  account_connections1?: Connection_Result[] | null;
  account_connections2?: Connection_Result[] | null;
  account_master_account?: Account_Result[] | null;
  account_parent_account?: Account_Result[] | null;
  contact_customer_accounts?: Contact_Result[] | null;
  msa_account_managingpartner?: Account_Result[] | null;
  msa_contact_managingpartner?: Contact_Result[] | null;
  msdyn_account_msdyn_accountkpiitem_accountid?: msdyn_accountkpiitem_Result[] | null;
}
interface Account extends Account_Base, Account_Relationships {
  defaultpricelevelid_bind$pricelevels?: string | null;
  msa_managingpartnerid_bind$accounts?: string | null;
  msdyn_accountkpiid_bind$msdyn_accountkpiitems?: string | null;
  msdyn_salesaccelerationinsightid_bind$msdyn_salesaccelerationinsights?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentaccountid_bind$accounts?: string | null;
  preferredequipmentid_bind$equipments?: string | null;
  preferredserviceid_bind$services?: string | null;
  preferredsystemuserid_bind$systemusers?: string | null;
  primarycontactid_bind$contacts?: string | null;
  sla_account_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  territoryid_bind$territories?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Account_Create extends Account {
  originatingleadid_bind$leads?: string | null;
}
interface Account_Update extends Account {
}
interface Account_Select {
  accountcategorycode: WebAttribute<Account_Select, { accountcategorycode: account_accountcategorycode | null }, { accountcategorycode_formatted?: string }>;
  accountclassificationcode: WebAttribute<Account_Select, { accountclassificationcode: account_accountclassificationcode | null }, { accountclassificationcode_formatted?: string }>;
  accountid: WebAttribute<Account_Select, { accountid: string | null }, {  }>;
  accountnumber: WebAttribute<Account_Select, { accountnumber: string | null }, {  }>;
  accountratingcode: WebAttribute<Account_Select, { accountratingcode: account_accountratingcode | null }, { accountratingcode_formatted?: string }>;
  address1_addressid: WebAttribute<Account_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Account_Select, { address1_addresstypecode: account_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Account_Select, { address1_city: string | null }, {  }>;
  address1_composite: WebAttribute<Account_Select, { address1_composite: string | null }, {  }>;
  address1_country: WebAttribute<Account_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Account_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Account_Select, { address1_fax: string | null }, {  }>;
  address1_freighttermscode: WebAttribute<Account_Select, { address1_freighttermscode: account_address1_freighttermscode | null }, { address1_freighttermscode_formatted?: string }>;
  address1_latitude: WebAttribute<Account_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Account_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Account_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Account_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Account_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Account_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Account_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Account_Select, { address1_postofficebox: string | null }, {  }>;
  address1_primarycontactname: WebAttribute<Account_Select, { address1_primarycontactname: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Account_Select, { address1_shippingmethodcode: account_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Account_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Account_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Account_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Account_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Account_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Account_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Account_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Account_Select, { address2_addresstypecode: account_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Account_Select, { address2_city: string | null }, {  }>;
  address2_composite: WebAttribute<Account_Select, { address2_composite: string | null }, {  }>;
  address2_country: WebAttribute<Account_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Account_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Account_Select, { address2_fax: string | null }, {  }>;
  address2_freighttermscode: WebAttribute<Account_Select, { address2_freighttermscode: account_address2_freighttermscode | null }, { address2_freighttermscode_formatted?: string }>;
  address2_latitude: WebAttribute<Account_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Account_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Account_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Account_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Account_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Account_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Account_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Account_Select, { address2_postofficebox: string | null }, {  }>;
  address2_primarycontactname: WebAttribute<Account_Select, { address2_primarycontactname: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Account_Select, { address2_shippingmethodcode: account_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Account_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Account_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Account_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Account_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Account_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Account_Select, { address2_utcoffset: number | null }, {  }>;
  adx_createdbyipaddress: WebAttribute<Account_Select, { adx_createdbyipaddress: string | null }, {  }>;
  adx_createdbyusername: WebAttribute<Account_Select, { adx_createdbyusername: string | null }, {  }>;
  adx_modifiedbyipaddress: WebAttribute<Account_Select, { adx_modifiedbyipaddress: string | null }, {  }>;
  adx_modifiedbyusername: WebAttribute<Account_Select, { adx_modifiedbyusername: string | null }, {  }>;
  aging30: WebAttribute<Account_Select, { aging30: number | null; transactioncurrencyid_guid: string | null }, { aging30_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging30_base: WebAttribute<Account_Select, { aging30_base: number | null; transactioncurrencyid_guid: string | null }, { aging30_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60: WebAttribute<Account_Select, { aging60: number | null; transactioncurrencyid_guid: string | null }, { aging60_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60_base: WebAttribute<Account_Select, { aging60_base: number | null; transactioncurrencyid_guid: string | null }, { aging60_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90: WebAttribute<Account_Select, { aging90: number | null; transactioncurrencyid_guid: string | null }, { aging90_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90_base: WebAttribute<Account_Select, { aging90_base: number | null; transactioncurrencyid_guid: string | null }, { aging90_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  businesstypecode: WebAttribute<Account_Select, { businesstypecode: account_businesstypecode | null }, { businesstypecode_formatted?: string }>;
  createdby_guid: WebAttribute<Account_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<Account_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<Account_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Account_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  creditlimit: WebAttribute<Account_Select, { creditlimit: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditlimit_base: WebAttribute<Account_Select, { creditlimit_base: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditonhold: WebAttribute<Account_Select, { creditonhold: boolean | null }, {  }>;
  customersizecode: WebAttribute<Account_Select, { customersizecode: account_customersizecode | null }, { customersizecode_formatted?: string }>;
  customertypecode: WebAttribute<Account_Select, { customertypecode: account_customertypecode | null }, { customertypecode_formatted?: string }>;
  defaultpricelevelid_guid: WebAttribute<Account_Select, { defaultpricelevelid_guid: string | null }, { defaultpricelevelid_formatted?: string }>;
  description: WebAttribute<Account_Select, { description: string | null }, {  }>;
  donotbulkemail: WebAttribute<Account_Select, { donotbulkemail: boolean | null }, {  }>;
  donotbulkpostalmail: WebAttribute<Account_Select, { donotbulkpostalmail: boolean | null }, {  }>;
  donotemail: WebAttribute<Account_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<Account_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<Account_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<Account_Select, { donotpostalmail: boolean | null }, {  }>;
  donotsendmm: WebAttribute<Account_Select, { donotsendmm: boolean | null }, {  }>;
  emailaddress1: WebAttribute<Account_Select, { emailaddress1: string | null }, {  }>;
  emailaddress2: WebAttribute<Account_Select, { emailaddress2: string | null }, {  }>;
  emailaddress3: WebAttribute<Account_Select, { emailaddress3: string | null }, {  }>;
  entityimageid: WebAttribute<Account_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Account_Select, { exchangerate: number | null }, {  }>;
  fax: WebAttribute<Account_Select, { fax: string | null }, {  }>;
  followemail: WebAttribute<Account_Select, { followemail: boolean | null }, {  }>;
  ftpsiteurl: WebAttribute<Account_Select, { ftpsiteurl: string | null }, {  }>;
  importsequencenumber: WebAttribute<Account_Select, { importsequencenumber: number | null }, {  }>;
  industrycode: WebAttribute<Account_Select, { industrycode: account_industrycode | null }, { industrycode_formatted?: string }>;
  isprivate: WebAttribute<Account_Select, { isprivate: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<Account_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  lastusedincampaign: WebAttribute<Account_Select, { lastusedincampaign: Date | null }, { lastusedincampaign_formatted?: string }>;
  marketcap: WebAttribute<Account_Select, { marketcap: number | null; transactioncurrencyid_guid: string | null }, { marketcap_formatted?: string; transactioncurrencyid_formatted?: string }>;
  marketcap_base: WebAttribute<Account_Select, { marketcap_base: number | null; transactioncurrencyid_guid: string | null }, { marketcap_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  marketingonly: WebAttribute<Account_Select, { marketingonly: boolean | null }, {  }>;
  masterid_guid: WebAttribute<Account_Select, { masterid_guid: string | null }, { masterid_formatted?: string }>;
  merged: WebAttribute<Account_Select, { merged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Account_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<Account_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<Account_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Account_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msa_managingpartnerid_guid: WebAttribute<Account_Select, { msa_managingpartnerid_guid: string | null }, { msa_managingpartnerid_formatted?: string }>;
  msdyn_accountkpiid_guid: WebAttribute<Account_Select, { msdyn_accountkpiid_guid: string | null }, { msdyn_accountkpiid_formatted?: string }>;
  msdyn_gdproptout: WebAttribute<Account_Select, { msdyn_gdproptout: boolean | null }, {  }>;
  msdyn_salesaccelerationinsightid_guid: WebAttribute<Account_Select, { msdyn_salesaccelerationinsightid_guid: string | null }, { msdyn_salesaccelerationinsightid_formatted?: string }>;
  name: WebAttribute<Account_Select, { name: string | null }, {  }>;
  numberofemployees: WebAttribute<Account_Select, { numberofemployees: number | null }, {  }>;
  onholdtime: WebAttribute<Account_Select, { onholdtime: number | null }, {  }>;
  opendeals: WebAttribute<Account_Select, { opendeals: number | null }, {  }>;
  opendeals_date: WebAttribute<Account_Select, { opendeals_date: Date | null }, { opendeals_date_formatted?: string }>;
  opendeals_state: WebAttribute<Account_Select, { opendeals_state: number | null }, {  }>;
  openrevenue: WebAttribute<Account_Select, { openrevenue: number | null; transactioncurrencyid_guid: string | null }, { openrevenue_formatted?: string; transactioncurrencyid_formatted?: string }>;
  openrevenue_base: WebAttribute<Account_Select, { openrevenue_base: number | null; transactioncurrencyid_guid: string | null }, { openrevenue_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  openrevenue_date: WebAttribute<Account_Select, { openrevenue_date: Date | null }, { openrevenue_date_formatted?: string }>;
  openrevenue_state: WebAttribute<Account_Select, { openrevenue_state: number | null }, {  }>;
  originatingleadid_guid: WebAttribute<Account_Select, { originatingleadid_guid: string | null }, { originatingleadid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Account_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Account_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  ownershipcode: WebAttribute<Account_Select, { ownershipcode: account_ownershipcode | null }, { ownershipcode_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Account_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Account_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Account_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentaccountid_guid: WebAttribute<Account_Select, { parentaccountid_guid: string | null }, { parentaccountid_formatted?: string }>;
  participatesinworkflow: WebAttribute<Account_Select, { participatesinworkflow: boolean | null }, {  }>;
  paymenttermscode: WebAttribute<Account_Select, { paymenttermscode: account_paymenttermscode | null }, { paymenttermscode_formatted?: string }>;
  preferredappointmentdaycode: WebAttribute<Account_Select, { preferredappointmentdaycode: account_preferredappointmentdaycode | null }, { preferredappointmentdaycode_formatted?: string }>;
  preferredappointmenttimecode: WebAttribute<Account_Select, { preferredappointmenttimecode: account_preferredappointmenttimecode | null }, { preferredappointmenttimecode_formatted?: string }>;
  preferredcontactmethodcode: WebAttribute<Account_Select, { preferredcontactmethodcode: account_preferredcontactmethodcode | null }, { preferredcontactmethodcode_formatted?: string }>;
  preferredequipmentid_guid: WebAttribute<Account_Select, { preferredequipmentid_guid: string | null }, { preferredequipmentid_formatted?: string }>;
  preferredserviceid_guid: WebAttribute<Account_Select, { preferredserviceid_guid: string | null }, { preferredserviceid_formatted?: string }>;
  preferredsystemuserid_guid: WebAttribute<Account_Select, { preferredsystemuserid_guid: string | null }, { preferredsystemuserid_formatted?: string }>;
  primarycontactid_guid: WebAttribute<Account_Select, { primarycontactid_guid: string | null }, { primarycontactid_formatted?: string }>;
  primarysatoriid: WebAttribute<Account_Select, { primarysatoriid: string | null }, {  }>;
  primarytwitterid: WebAttribute<Account_Select, { primarytwitterid: string | null }, {  }>;
  processid: WebAttribute<Account_Select, { processid: string | null }, {  }>;
  revenue: WebAttribute<Account_Select, { revenue: number | null; transactioncurrencyid_guid: string | null }, { revenue_formatted?: string; transactioncurrencyid_formatted?: string }>;
  revenue_base: WebAttribute<Account_Select, { revenue_base: number | null; transactioncurrencyid_guid: string | null }, { revenue_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  sharesoutstanding: WebAttribute<Account_Select, { sharesoutstanding: number | null }, {  }>;
  shippingmethodcode: WebAttribute<Account_Select, { shippingmethodcode: account_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  sic: WebAttribute<Account_Select, { sic: string | null }, {  }>;
  slaid_guid: WebAttribute<Account_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Account_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  stageid: WebAttribute<Account_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Account_Select, { statecode: account_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Account_Select, { statuscode: account_statuscode | null }, { statuscode_formatted?: string }>;
  stockexchange: WebAttribute<Account_Select, { stockexchange: string | null }, {  }>;
  teamsfollowed: WebAttribute<Account_Select, { teamsfollowed: number | null }, {  }>;
  telephone1: WebAttribute<Account_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<Account_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<Account_Select, { telephone3: string | null }, {  }>;
  territorycode: WebAttribute<Account_Select, { territorycode: account_territorycode | null }, { territorycode_formatted?: string }>;
  territoryid_guid: WebAttribute<Account_Select, { territoryid_guid: string | null }, { territoryid_formatted?: string }>;
  tickersymbol: WebAttribute<Account_Select, { tickersymbol: string | null }, {  }>;
  timespentbymeonemailandmeetings: WebAttribute<Account_Select, { timespentbymeonemailandmeetings: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Account_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Account_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Account_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Account_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Account_Select, { versionnumber: number | null }, {  }>;
  websiteurl: WebAttribute<Account_Select, { websiteurl: string | null }, {  }>;
}
interface Account_Filter {
  accountcategorycode: account_accountcategorycode;
  accountclassificationcode: account_accountclassificationcode;
  accountid: XQW.Guid;
  accountnumber: string;
  accountratingcode: account_accountratingcode;
  address1_addressid: XQW.Guid;
  address1_addresstypecode: account_address1_addresstypecode;
  address1_city: string;
  address1_composite: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_freighttermscode: account_address1_freighttermscode;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_primarycontactname: string;
  address1_shippingmethodcode: account_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: account_address2_addresstypecode;
  address2_city: string;
  address2_composite: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_freighttermscode: account_address2_freighttermscode;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_primarycontactname: string;
  address2_shippingmethodcode: account_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  adx_createdbyipaddress: string;
  adx_createdbyusername: string;
  adx_modifiedbyipaddress: string;
  adx_modifiedbyusername: string;
  aging30: number;
  aging30_base: number;
  aging60: number;
  aging60_base: number;
  aging90: number;
  aging90_base: number;
  businesstypecode: account_businesstypecode;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  creditlimit: number;
  creditlimit_base: number;
  creditonhold: boolean;
  customersizecode: account_customersizecode;
  customertypecode: account_customertypecode;
  defaultpricelevelid_guid: XQW.Guid;
  description: string;
  donotbulkemail: boolean;
  donotbulkpostalmail: boolean;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  donotsendmm: boolean;
  emailaddress1: string;
  emailaddress2: string;
  emailaddress3: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  fax: string;
  followemail: boolean;
  ftpsiteurl: string;
  importsequencenumber: number;
  industrycode: account_industrycode;
  isprivate: boolean;
  lastonholdtime: Date;
  lastusedincampaign: Date;
  marketcap: number;
  marketcap_base: number;
  marketingonly: boolean;
  masterid_guid: XQW.Guid;
  merged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msa_managingpartnerid_guid: XQW.Guid;
  msdyn_accountkpiid_guid: XQW.Guid;
  msdyn_gdproptout: boolean;
  msdyn_salesaccelerationinsightid_guid: XQW.Guid;
  name: string;
  numberofemployees: number;
  onholdtime: number;
  opendeals: number;
  opendeals_date: Date;
  opendeals_state: number;
  openrevenue: number;
  openrevenue_base: number;
  openrevenue_date: Date;
  openrevenue_state: number;
  originatingleadid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  ownershipcode: account_ownershipcode;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentaccountid_guid: XQW.Guid;
  participatesinworkflow: boolean;
  paymenttermscode: account_paymenttermscode;
  preferredappointmentdaycode: account_preferredappointmentdaycode;
  preferredappointmenttimecode: account_preferredappointmenttimecode;
  preferredcontactmethodcode: account_preferredcontactmethodcode;
  preferredequipmentid_guid: XQW.Guid;
  preferredserviceid_guid: XQW.Guid;
  preferredsystemuserid_guid: XQW.Guid;
  primarycontactid_guid: XQW.Guid;
  primarysatoriid: string;
  primarytwitterid: string;
  processid: XQW.Guid;
  revenue: number;
  revenue_base: number;
  sharesoutstanding: number;
  shippingmethodcode: account_shippingmethodcode;
  sic: string;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: account_statecode;
  statuscode: account_statuscode;
  stockexchange: string;
  teamsfollowed: number;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  territorycode: account_territorycode;
  territoryid_guid: XQW.Guid;
  tickersymbol: string;
  timespentbymeonemailandmeetings: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  websiteurl: string;
}
interface Account_Expand {
  CreatedAccount_BulkOperationLogs2: WebExpand<Account_Expand, BulkOperationLog_Select, BulkOperationLog_Filter, { CreatedAccount_BulkOperationLogs2: BulkOperationLog_Result[] }>;
  SourceAccount_BulkOperationLogs: WebExpand<Account_Expand, BulkOperationLog_Select, BulkOperationLog_Filter, { SourceAccount_BulkOperationLogs: BulkOperationLog_Result[] }>;
  account_activity_parties: WebExpand<Account_Expand, ActivityParty_Select, ActivityParty_Filter, { account_activity_parties: ActivityParty_Result[] }>;
  account_connections1: WebExpand<Account_Expand, Connection_Select, Connection_Filter, { account_connections1: Connection_Result[] }>;
  account_connections2: WebExpand<Account_Expand, Connection_Select, Connection_Filter, { account_connections2: Connection_Result[] }>;
  account_master_account: WebExpand<Account_Expand, Account_Select, Account_Filter, { account_master_account: Account_Result[] }>;
  account_parent_account: WebExpand<Account_Expand, Account_Select, Account_Filter, { account_parent_account: Account_Result[] }>;
  contact_customer_accounts: WebExpand<Account_Expand, Contact_Select, Contact_Filter, { contact_customer_accounts: Contact_Result[] }>;
  masterid: WebExpand<Account_Expand, Account_Select, Account_Filter, { masterid: Account_Result }>;
  msa_account_managingpartner: WebExpand<Account_Expand, Account_Select, Account_Filter, { msa_account_managingpartner: Account_Result[] }>;
  msa_contact_managingpartner: WebExpand<Account_Expand, Contact_Select, Contact_Filter, { msa_contact_managingpartner: Contact_Result[] }>;
  msa_managingpartnerid: WebExpand<Account_Expand, Account_Select, Account_Filter, { msa_managingpartnerid: Account_Result }>;
  msdyn_account_msdyn_accountkpiitem_accountid: WebExpand<Account_Expand, msdyn_accountkpiitem_Select, msdyn_accountkpiitem_Filter, { msdyn_account_msdyn_accountkpiitem_accountid: msdyn_accountkpiitem_Result[] }>;
  msdyn_accountkpiid: WebExpand<Account_Expand, msdyn_accountkpiitem_Select, msdyn_accountkpiitem_Filter, { msdyn_accountkpiid: msdyn_accountkpiitem_Result }>;
  parentaccountid: WebExpand<Account_Expand, Account_Select, Account_Filter, { parentaccountid: Account_Result }>;
  primarycontactid: WebExpand<Account_Expand, Contact_Select, Contact_Filter, { primarycontactid: Contact_Result }>;
}
interface Account_FormattedResult {
  accountcategorycode_formatted?: string;
  accountclassificationcode_formatted?: string;
  accountratingcode_formatted?: string;
  address1_addresstypecode_formatted?: string;
  address1_freighttermscode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_freighttermscode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  aging30_base_formatted?: string;
  aging30_formatted?: string;
  aging60_base_formatted?: string;
  aging60_formatted?: string;
  aging90_base_formatted?: string;
  aging90_formatted?: string;
  businesstypecode_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  creditlimit_base_formatted?: string;
  creditlimit_formatted?: string;
  customersizecode_formatted?: string;
  customertypecode_formatted?: string;
  defaultpricelevelid_formatted?: string;
  industrycode_formatted?: string;
  lastonholdtime_formatted?: string;
  lastusedincampaign_formatted?: string;
  marketcap_base_formatted?: string;
  marketcap_formatted?: string;
  masterid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msa_managingpartnerid_formatted?: string;
  msdyn_accountkpiid_formatted?: string;
  msdyn_salesaccelerationinsightid_formatted?: string;
  opendeals_date_formatted?: string;
  openrevenue_base_formatted?: string;
  openrevenue_date_formatted?: string;
  openrevenue_formatted?: string;
  originatingleadid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  ownershipcode_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentaccountid_formatted?: string;
  paymenttermscode_formatted?: string;
  preferredappointmentdaycode_formatted?: string;
  preferredappointmenttimecode_formatted?: string;
  preferredcontactmethodcode_formatted?: string;
  preferredequipmentid_formatted?: string;
  preferredserviceid_formatted?: string;
  preferredsystemuserid_formatted?: string;
  primarycontactid_formatted?: string;
  revenue_base_formatted?: string;
  revenue_formatted?: string;
  shippingmethodcode_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  territorycode_formatted?: string;
  territoryid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Account_Result extends Account_Base, Account_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  defaultpricelevelid_guid: string | null;
  masterid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msa_managingpartnerid_guid: string | null;
  msdyn_accountkpiid_guid: string | null;
  msdyn_salesaccelerationinsightid_guid: string | null;
  originatingleadid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentaccountid_guid: string | null;
  preferredequipmentid_guid: string | null;
  preferredserviceid_guid: string | null;
  preferredsystemuserid_guid: string | null;
  primarycontactid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  territoryid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Account_RelatedOne {
  masterid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msa_managingpartnerid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_accountkpiid: WebMappingRetrieve<msdyn_accountkpiitem_Select,msdyn_accountkpiitem_Expand,msdyn_accountkpiitem_Filter,msdyn_accountkpiitem_Fixed,msdyn_accountkpiitem_Result,msdyn_accountkpiitem_FormattedResult>;
  parentaccountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  primarycontactid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface Account_RelatedMany {
  CreatedAccount_BulkOperationLogs2: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
  SourceAccount_BulkOperationLogs: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
  account_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  account_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  account_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  account_master_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  account_parent_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  contact_customer_accounts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msa_account_managingpartner: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msa_contact_managingpartner: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_account_msdyn_accountkpiitem_accountid: WebMappingRetrieve<msdyn_accountkpiitem_Select,msdyn_accountkpiitem_Expand,msdyn_accountkpiitem_Filter,msdyn_accountkpiitem_Fixed,msdyn_accountkpiitem_Result,msdyn_accountkpiitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface WebEntitiesRelated {
  accounts: WebMappingRelated<Account_RelatedOne,Account_RelatedMany>;
}
interface WebEntitiesCUDA {
  accounts: WebMappingCUDA<Account_Create,Account_Update,Account_Select>;
}
interface Contact_Base extends WebEntity {
  accountrolecode?: contact_accountrolecode | null;
  address1_addressid?: string | null;
  address1_addresstypecode?: contact_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_composite?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_freighttermscode?: contact_address1_freighttermscode | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_primarycontactname?: string | null;
  address1_shippingmethodcode?: contact_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: contact_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_composite?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_freighttermscode?: contact_address2_freighttermscode | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_primarycontactname?: string | null;
  address2_shippingmethodcode?: contact_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  address3_addressid?: string | null;
  address3_addresstypecode?: contact_address3_addresstypecode | null;
  address3_city?: string | null;
  address3_composite?: string | null;
  address3_country?: string | null;
  address3_county?: string | null;
  address3_fax?: string | null;
  address3_freighttermscode?: contact_address3_freighttermscode | null;
  address3_latitude?: number | null;
  address3_line1?: string | null;
  address3_line2?: string | null;
  address3_line3?: string | null;
  address3_longitude?: number | null;
  address3_name?: string | null;
  address3_postalcode?: string | null;
  address3_postofficebox?: string | null;
  address3_primarycontactname?: string | null;
  address3_shippingmethodcode?: contact_address3_shippingmethodcode | null;
  address3_stateorprovince?: string | null;
  address3_telephone1?: string | null;
  address3_telephone2?: string | null;
  address3_telephone3?: string | null;
  address3_upszone?: string | null;
  address3_utcoffset?: number | null;
  adx_confirmremovepassword?: boolean | null;
  adx_createdbyipaddress?: string | null;
  adx_createdbyusername?: string | null;
  adx_identity_accessfailedcount?: number | null;
  adx_identity_emailaddress1confirmed?: boolean | null;
  adx_identity_lastsuccessfullogin?: Date | null;
  adx_identity_locallogindisabled?: boolean | null;
  adx_identity_lockoutenabled?: boolean | null;
  adx_identity_lockoutenddate?: Date | null;
  adx_identity_logonenabled?: boolean | null;
  adx_identity_mobilephoneconfirmed?: boolean | null;
  adx_identity_newpassword?: string | null;
  adx_identity_passwordhash?: string | null;
  adx_identity_securitystamp?: string | null;
  adx_identity_twofactorenabled?: boolean | null;
  adx_identity_username?: string | null;
  adx_modifiedbyipaddress?: string | null;
  adx_modifiedbyusername?: string | null;
  adx_organizationname?: string | null;
  adx_preferredlcid?: number | null;
  adx_profilealert?: boolean | null;
  adx_profilealertdate?: Date | null;
  adx_profilealertinstructions?: string | null;
  adx_profileisanonymous?: boolean | null;
  adx_profilelastactivity?: Date | null;
  adx_profilemodifiedon?: Date | null;
  adx_publicprofilecopy?: string | null;
  adx_timezone?: number | null;
  aging30?: number | null;
  aging30_base?: number | null;
  aging60?: number | null;
  aging60_base?: number | null;
  aging90?: number | null;
  aging90_base?: number | null;
  anniversary?: Date | null;
  annualincome?: number | null;
  annualincome_base?: number | null;
  assistantname?: string | null;
  assistantphone?: string | null;
  birthdate?: Date | null;
  business2?: string | null;
  businesscard?: string | null;
  businesscardattributes?: string | null;
  callback?: string | null;
  childrensnames?: string | null;
  company?: string | null;
  contactid?: string | null;
  createdon?: Date | null;
  creditlimit?: number | null;
  creditlimit_base?: number | null;
  creditonhold?: boolean | null;
  customersizecode?: contact_customersizecode | null;
  customertypecode?: contact_customertypecode | null;
  department?: string | null;
  description?: string | null;
  donotbulkemail?: boolean | null;
  donotbulkpostalmail?: boolean | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  donotsendmm?: boolean | null;
  educationcode?: contact_educationcode | null;
  emailaddress1?: string | null;
  emailaddress2?: string | null;
  emailaddress3?: string | null;
  employeeid?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  externaluseridentifier?: string | null;
  familystatuscode?: contact_familystatuscode | null;
  fax?: string | null;
  firstname?: string | null;
  followemail?: boolean | null;
  ftpsiteurl?: string | null;
  fullname?: string | null;
  gendercode?: contact_gendercode | null;
  governmentid?: string | null;
  haschildrencode?: contact_haschildrencode | null;
  home2?: string | null;
  importsequencenumber?: number | null;
  isautocreate?: boolean | null;
  isbackofficecustomer?: boolean | null;
  isprivate?: boolean | null;
  jobtitle?: string | null;
  lastname?: string | null;
  lastonholdtime?: Date | null;
  lastusedincampaign?: Date | null;
  leadsourcecode?: contact_leadsourcecode | null;
  managername?: string | null;
  managerphone?: string | null;
  marketingonly?: boolean | null;
  merged?: boolean | null;
  middlename?: string | null;
  mobilephone?: string | null;
  modifiedon?: Date | null;
  msdyn_decisioninfluencetag?: contact_msdyn_decisioninfluencetag | null;
  msdyn_disablewebtracking?: boolean | null;
  msdyn_gdproptout?: boolean | null;
  msdyn_isassistantinorgchart?: boolean | null;
  msdyn_isminor?: boolean | null;
  msdyn_isminorwithparentalconsent?: boolean | null;
  msdyn_orgchangestatus?: contact_msdyn_orgchangestatus | null;
  msdyn_portaltermsagreementdate?: Date | null;
  mspp_userpreferredlcid?: powerpagelanguages | null;
  nickname?: string | null;
  numberofchildren?: number | null;
  onholdtime?: number | null;
  overriddencreatedon?: Date | null;
  pager?: string | null;
  participatesinworkflow?: boolean | null;
  paymenttermscode?: contact_paymenttermscode | null;
  preferredappointmentdaycode?: contact_preferredappointmentdaycode | null;
  preferredappointmenttimecode?: contact_preferredappointmenttimecode | null;
  preferredcontactmethodcode?: contact_preferredcontactmethodcode | null;
  processid?: string | null;
  salutation?: string | null;
  shippingmethodcode?: contact_shippingmethodcode | null;
  spousesname?: string | null;
  stageid?: string | null;
  statecode?: contact_statecode | null;
  statuscode?: contact_statuscode | null;
  subscriptionid?: string | null;
  suffix?: string | null;
  teamsfollowed?: number | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  territorycode?: contact_territorycode | null;
  timespentbymeonemailandmeetings?: string | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  websiteurl?: string | null;
}
interface Contact_Relationships {
  CreatedContact_BulkOperationLogs?: BulkOperationLog_Result[] | null;
  SourceContact_BulkOperationLogs?: BulkOperationLog_Result[] | null;
  account_primary_contact?: Account_Result[] | null;
  contact_activity_parties?: ActivityParty_Result[] | null;
  contact_connections1?: Connection_Result[] | null;
  contact_connections2?: Connection_Result[] | null;
  contact_customer_contacts?: Contact_Result[] | null;
  contact_master_contact?: Contact_Result[] | null;
  msdyn_contact_msdyn_contactkpiitem_contactid?: msdyn_contactkpiitem_Result[] | null;
  parentcustomerid_account?: Account_Result | null;
  parentcustomerid_contact?: Contact_Result | null;
}
interface Contact extends Contact_Base, Contact_Relationships {
  defaultpricelevelid_bind$pricelevels?: string | null;
  msa_managingpartnerid_bind$accounts?: string | null;
  msdyn_contactkpiid_bind$msdyn_contactkpiitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentcustomerid_account_bind$accounts?: string | null;
  parentcustomerid_contact_bind$contacts?: string | null;
  preferredequipmentid_bind$equipments?: string | null;
  preferredserviceid_bind$services?: string | null;
  preferredsystemuserid_bind$systemusers?: string | null;
  sla_contact_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Contact_Create extends Contact {
  originatingleadid_bind$leads?: string | null;
}
interface Contact_Update extends Contact {
}
interface Contact_Select {
  accountid_guid: WebAttribute<Contact_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  accountrolecode: WebAttribute<Contact_Select, { accountrolecode: contact_accountrolecode | null }, { accountrolecode_formatted?: string }>;
  address1_addressid: WebAttribute<Contact_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Contact_Select, { address1_addresstypecode: contact_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Contact_Select, { address1_city: string | null }, {  }>;
  address1_composite: WebAttribute<Contact_Select, { address1_composite: string | null }, {  }>;
  address1_country: WebAttribute<Contact_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Contact_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Contact_Select, { address1_fax: string | null }, {  }>;
  address1_freighttermscode: WebAttribute<Contact_Select, { address1_freighttermscode: contact_address1_freighttermscode | null }, { address1_freighttermscode_formatted?: string }>;
  address1_latitude: WebAttribute<Contact_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Contact_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Contact_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Contact_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Contact_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Contact_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Contact_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Contact_Select, { address1_postofficebox: string | null }, {  }>;
  address1_primarycontactname: WebAttribute<Contact_Select, { address1_primarycontactname: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Contact_Select, { address1_shippingmethodcode: contact_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Contact_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Contact_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Contact_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Contact_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Contact_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Contact_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Contact_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Contact_Select, { address2_addresstypecode: contact_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Contact_Select, { address2_city: string | null }, {  }>;
  address2_composite: WebAttribute<Contact_Select, { address2_composite: string | null }, {  }>;
  address2_country: WebAttribute<Contact_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Contact_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Contact_Select, { address2_fax: string | null }, {  }>;
  address2_freighttermscode: WebAttribute<Contact_Select, { address2_freighttermscode: contact_address2_freighttermscode | null }, { address2_freighttermscode_formatted?: string }>;
  address2_latitude: WebAttribute<Contact_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Contact_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Contact_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Contact_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Contact_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Contact_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Contact_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Contact_Select, { address2_postofficebox: string | null }, {  }>;
  address2_primarycontactname: WebAttribute<Contact_Select, { address2_primarycontactname: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Contact_Select, { address2_shippingmethodcode: contact_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Contact_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Contact_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Contact_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Contact_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Contact_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Contact_Select, { address2_utcoffset: number | null }, {  }>;
  address3_addressid: WebAttribute<Contact_Select, { address3_addressid: string | null }, {  }>;
  address3_addresstypecode: WebAttribute<Contact_Select, { address3_addresstypecode: contact_address3_addresstypecode | null }, { address3_addresstypecode_formatted?: string }>;
  address3_city: WebAttribute<Contact_Select, { address3_city: string | null }, {  }>;
  address3_composite: WebAttribute<Contact_Select, { address3_composite: string | null }, {  }>;
  address3_country: WebAttribute<Contact_Select, { address3_country: string | null }, {  }>;
  address3_county: WebAttribute<Contact_Select, { address3_county: string | null }, {  }>;
  address3_fax: WebAttribute<Contact_Select, { address3_fax: string | null }, {  }>;
  address3_freighttermscode: WebAttribute<Contact_Select, { address3_freighttermscode: contact_address3_freighttermscode | null }, { address3_freighttermscode_formatted?: string }>;
  address3_latitude: WebAttribute<Contact_Select, { address3_latitude: number | null }, {  }>;
  address3_line1: WebAttribute<Contact_Select, { address3_line1: string | null }, {  }>;
  address3_line2: WebAttribute<Contact_Select, { address3_line2: string | null }, {  }>;
  address3_line3: WebAttribute<Contact_Select, { address3_line3: string | null }, {  }>;
  address3_longitude: WebAttribute<Contact_Select, { address3_longitude: number | null }, {  }>;
  address3_name: WebAttribute<Contact_Select, { address3_name: string | null }, {  }>;
  address3_postalcode: WebAttribute<Contact_Select, { address3_postalcode: string | null }, {  }>;
  address3_postofficebox: WebAttribute<Contact_Select, { address3_postofficebox: string | null }, {  }>;
  address3_primarycontactname: WebAttribute<Contact_Select, { address3_primarycontactname: string | null }, {  }>;
  address3_shippingmethodcode: WebAttribute<Contact_Select, { address3_shippingmethodcode: contact_address3_shippingmethodcode | null }, { address3_shippingmethodcode_formatted?: string }>;
  address3_stateorprovince: WebAttribute<Contact_Select, { address3_stateorprovince: string | null }, {  }>;
  address3_telephone1: WebAttribute<Contact_Select, { address3_telephone1: string | null }, {  }>;
  address3_telephone2: WebAttribute<Contact_Select, { address3_telephone2: string | null }, {  }>;
  address3_telephone3: WebAttribute<Contact_Select, { address3_telephone3: string | null }, {  }>;
  address3_upszone: WebAttribute<Contact_Select, { address3_upszone: string | null }, {  }>;
  address3_utcoffset: WebAttribute<Contact_Select, { address3_utcoffset: number | null }, {  }>;
  adx_confirmremovepassword: WebAttribute<Contact_Select, { adx_confirmremovepassword: boolean | null }, {  }>;
  adx_createdbyipaddress: WebAttribute<Contact_Select, { adx_createdbyipaddress: string | null }, {  }>;
  adx_createdbyusername: WebAttribute<Contact_Select, { adx_createdbyusername: string | null }, {  }>;
  adx_identity_accessfailedcount: WebAttribute<Contact_Select, { adx_identity_accessfailedcount: number | null }, {  }>;
  adx_identity_emailaddress1confirmed: WebAttribute<Contact_Select, { adx_identity_emailaddress1confirmed: boolean | null }, {  }>;
  adx_identity_lastsuccessfullogin: WebAttribute<Contact_Select, { adx_identity_lastsuccessfullogin: Date | null }, { adx_identity_lastsuccessfullogin_formatted?: string }>;
  adx_identity_locallogindisabled: WebAttribute<Contact_Select, { adx_identity_locallogindisabled: boolean | null }, {  }>;
  adx_identity_lockoutenabled: WebAttribute<Contact_Select, { adx_identity_lockoutenabled: boolean | null }, {  }>;
  adx_identity_lockoutenddate: WebAttribute<Contact_Select, { adx_identity_lockoutenddate: Date | null }, { adx_identity_lockoutenddate_formatted?: string }>;
  adx_identity_logonenabled: WebAttribute<Contact_Select, { adx_identity_logonenabled: boolean | null }, {  }>;
  adx_identity_mobilephoneconfirmed: WebAttribute<Contact_Select, { adx_identity_mobilephoneconfirmed: boolean | null }, {  }>;
  adx_identity_newpassword: WebAttribute<Contact_Select, { adx_identity_newpassword: string | null }, {  }>;
  adx_identity_passwordhash: WebAttribute<Contact_Select, { adx_identity_passwordhash: string | null }, {  }>;
  adx_identity_securitystamp: WebAttribute<Contact_Select, { adx_identity_securitystamp: string | null }, {  }>;
  adx_identity_twofactorenabled: WebAttribute<Contact_Select, { adx_identity_twofactorenabled: boolean | null }, {  }>;
  adx_identity_username: WebAttribute<Contact_Select, { adx_identity_username: string | null }, {  }>;
  adx_modifiedbyipaddress: WebAttribute<Contact_Select, { adx_modifiedbyipaddress: string | null }, {  }>;
  adx_modifiedbyusername: WebAttribute<Contact_Select, { adx_modifiedbyusername: string | null }, {  }>;
  adx_organizationname: WebAttribute<Contact_Select, { adx_organizationname: string | null }, {  }>;
  adx_preferredlcid: WebAttribute<Contact_Select, { adx_preferredlcid: number | null }, {  }>;
  adx_profilealert: WebAttribute<Contact_Select, { adx_profilealert: boolean | null }, {  }>;
  adx_profilealertdate: WebAttribute<Contact_Select, { adx_profilealertdate: Date | null }, { adx_profilealertdate_formatted?: string }>;
  adx_profilealertinstructions: WebAttribute<Contact_Select, { adx_profilealertinstructions: string | null }, {  }>;
  adx_profileisanonymous: WebAttribute<Contact_Select, { adx_profileisanonymous: boolean | null }, {  }>;
  adx_profilelastactivity: WebAttribute<Contact_Select, { adx_profilelastactivity: Date | null }, { adx_profilelastactivity_formatted?: string }>;
  adx_profilemodifiedon: WebAttribute<Contact_Select, { adx_profilemodifiedon: Date | null }, { adx_profilemodifiedon_formatted?: string }>;
  adx_publicprofilecopy: WebAttribute<Contact_Select, { adx_publicprofilecopy: string | null }, {  }>;
  adx_timezone: WebAttribute<Contact_Select, { adx_timezone: number | null }, {  }>;
  aging30: WebAttribute<Contact_Select, { aging30: number | null; transactioncurrencyid_guid: string | null }, { aging30_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging30_base: WebAttribute<Contact_Select, { aging30_base: number | null; transactioncurrencyid_guid: string | null }, { aging30_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60: WebAttribute<Contact_Select, { aging60: number | null; transactioncurrencyid_guid: string | null }, { aging60_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60_base: WebAttribute<Contact_Select, { aging60_base: number | null; transactioncurrencyid_guid: string | null }, { aging60_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90: WebAttribute<Contact_Select, { aging90: number | null; transactioncurrencyid_guid: string | null }, { aging90_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90_base: WebAttribute<Contact_Select, { aging90_base: number | null; transactioncurrencyid_guid: string | null }, { aging90_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  anniversary: WebAttribute<Contact_Select, { anniversary: Date | null }, { anniversary_formatted?: string }>;
  annualincome: WebAttribute<Contact_Select, { annualincome: number | null; transactioncurrencyid_guid: string | null }, { annualincome_formatted?: string; transactioncurrencyid_formatted?: string }>;
  annualincome_base: WebAttribute<Contact_Select, { annualincome_base: number | null; transactioncurrencyid_guid: string | null }, { annualincome_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  assistantname: WebAttribute<Contact_Select, { assistantname: string | null }, {  }>;
  assistantphone: WebAttribute<Contact_Select, { assistantphone: string | null }, {  }>;
  birthdate: WebAttribute<Contact_Select, { birthdate: Date | null }, { birthdate_formatted?: string }>;
  business2: WebAttribute<Contact_Select, { business2: string | null }, {  }>;
  businesscard: WebAttribute<Contact_Select, { businesscard: string | null }, {  }>;
  businesscardattributes: WebAttribute<Contact_Select, { businesscardattributes: string | null }, {  }>;
  callback: WebAttribute<Contact_Select, { callback: string | null }, {  }>;
  childrensnames: WebAttribute<Contact_Select, { childrensnames: string | null }, {  }>;
  company: WebAttribute<Contact_Select, { company: string | null }, {  }>;
  contactid: WebAttribute<Contact_Select, { contactid: string | null }, {  }>;
  createdby_guid: WebAttribute<Contact_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<Contact_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<Contact_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Contact_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  creditlimit: WebAttribute<Contact_Select, { creditlimit: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditlimit_base: WebAttribute<Contact_Select, { creditlimit_base: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditonhold: WebAttribute<Contact_Select, { creditonhold: boolean | null }, {  }>;
  customersizecode: WebAttribute<Contact_Select, { customersizecode: contact_customersizecode | null }, { customersizecode_formatted?: string }>;
  customertypecode: WebAttribute<Contact_Select, { customertypecode: contact_customertypecode | null }, { customertypecode_formatted?: string }>;
  defaultpricelevelid_guid: WebAttribute<Contact_Select, { defaultpricelevelid_guid: string | null }, { defaultpricelevelid_formatted?: string }>;
  department: WebAttribute<Contact_Select, { department: string | null }, {  }>;
  description: WebAttribute<Contact_Select, { description: string | null }, {  }>;
  donotbulkemail: WebAttribute<Contact_Select, { donotbulkemail: boolean | null }, {  }>;
  donotbulkpostalmail: WebAttribute<Contact_Select, { donotbulkpostalmail: boolean | null }, {  }>;
  donotemail: WebAttribute<Contact_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<Contact_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<Contact_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<Contact_Select, { donotpostalmail: boolean | null }, {  }>;
  donotsendmm: WebAttribute<Contact_Select, { donotsendmm: boolean | null }, {  }>;
  educationcode: WebAttribute<Contact_Select, { educationcode: contact_educationcode | null }, { educationcode_formatted?: string }>;
  emailaddress1: WebAttribute<Contact_Select, { emailaddress1: string | null }, {  }>;
  emailaddress2: WebAttribute<Contact_Select, { emailaddress2: string | null }, {  }>;
  emailaddress3: WebAttribute<Contact_Select, { emailaddress3: string | null }, {  }>;
  employeeid: WebAttribute<Contact_Select, { employeeid: string | null }, {  }>;
  entityimageid: WebAttribute<Contact_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Contact_Select, { exchangerate: number | null }, {  }>;
  externaluseridentifier: WebAttribute<Contact_Select, { externaluseridentifier: string | null }, {  }>;
  familystatuscode: WebAttribute<Contact_Select, { familystatuscode: contact_familystatuscode | null }, { familystatuscode_formatted?: string }>;
  fax: WebAttribute<Contact_Select, { fax: string | null }, {  }>;
  firstname: WebAttribute<Contact_Select, { firstname: string | null }, {  }>;
  followemail: WebAttribute<Contact_Select, { followemail: boolean | null }, {  }>;
  ftpsiteurl: WebAttribute<Contact_Select, { ftpsiteurl: string | null }, {  }>;
  fullname: WebAttribute<Contact_Select, { fullname: string | null }, {  }>;
  gendercode: WebAttribute<Contact_Select, { gendercode: contact_gendercode | null }, { gendercode_formatted?: string }>;
  governmentid: WebAttribute<Contact_Select, { governmentid: string | null }, {  }>;
  haschildrencode: WebAttribute<Contact_Select, { haschildrencode: contact_haschildrencode | null }, { haschildrencode_formatted?: string }>;
  home2: WebAttribute<Contact_Select, { home2: string | null }, {  }>;
  importsequencenumber: WebAttribute<Contact_Select, { importsequencenumber: number | null }, {  }>;
  isautocreate: WebAttribute<Contact_Select, { isautocreate: boolean | null }, {  }>;
  isbackofficecustomer: WebAttribute<Contact_Select, { isbackofficecustomer: boolean | null }, {  }>;
  isprivate: WebAttribute<Contact_Select, { isprivate: boolean | null }, {  }>;
  jobtitle: WebAttribute<Contact_Select, { jobtitle: string | null }, {  }>;
  lastname: WebAttribute<Contact_Select, { lastname: string | null }, {  }>;
  lastonholdtime: WebAttribute<Contact_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  lastusedincampaign: WebAttribute<Contact_Select, { lastusedincampaign: Date | null }, { lastusedincampaign_formatted?: string }>;
  leadsourcecode: WebAttribute<Contact_Select, { leadsourcecode: contact_leadsourcecode | null }, { leadsourcecode_formatted?: string }>;
  managername: WebAttribute<Contact_Select, { managername: string | null }, {  }>;
  managerphone: WebAttribute<Contact_Select, { managerphone: string | null }, {  }>;
  marketingonly: WebAttribute<Contact_Select, { marketingonly: boolean | null }, {  }>;
  masterid_guid: WebAttribute<Contact_Select, { masterid_guid: string | null }, { masterid_formatted?: string }>;
  merged: WebAttribute<Contact_Select, { merged: boolean | null }, {  }>;
  middlename: WebAttribute<Contact_Select, { middlename: string | null }, {  }>;
  mobilephone: WebAttribute<Contact_Select, { mobilephone: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Contact_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<Contact_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<Contact_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Contact_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msa_managingpartnerid_guid: WebAttribute<Contact_Select, { msa_managingpartnerid_guid: string | null }, { msa_managingpartnerid_formatted?: string }>;
  msdyn_contactkpiid_guid: WebAttribute<Contact_Select, { msdyn_contactkpiid_guid: string | null }, { msdyn_contactkpiid_formatted?: string }>;
  msdyn_decisioninfluencetag: WebAttribute<Contact_Select, { msdyn_decisioninfluencetag: contact_msdyn_decisioninfluencetag | null }, { msdyn_decisioninfluencetag_formatted?: string }>;
  msdyn_disablewebtracking: WebAttribute<Contact_Select, { msdyn_disablewebtracking: boolean | null }, {  }>;
  msdyn_gdproptout: WebAttribute<Contact_Select, { msdyn_gdproptout: boolean | null }, {  }>;
  msdyn_isassistantinorgchart: WebAttribute<Contact_Select, { msdyn_isassistantinorgchart: boolean | null }, {  }>;
  msdyn_isminor: WebAttribute<Contact_Select, { msdyn_isminor: boolean | null }, {  }>;
  msdyn_isminorwithparentalconsent: WebAttribute<Contact_Select, { msdyn_isminorwithparentalconsent: boolean | null }, {  }>;
  msdyn_orgchangestatus: WebAttribute<Contact_Select, { msdyn_orgchangestatus: contact_msdyn_orgchangestatus | null }, { msdyn_orgchangestatus_formatted?: string }>;
  msdyn_portaltermsagreementdate: WebAttribute<Contact_Select, { msdyn_portaltermsagreementdate: Date | null }, { msdyn_portaltermsagreementdate_formatted?: string }>;
  mspp_userpreferredlcid: WebAttribute<Contact_Select, { mspp_userpreferredlcid: powerpagelanguages | null }, { mspp_userpreferredlcid_formatted?: string }>;
  nickname: WebAttribute<Contact_Select, { nickname: string | null }, {  }>;
  numberofchildren: WebAttribute<Contact_Select, { numberofchildren: number | null }, {  }>;
  onholdtime: WebAttribute<Contact_Select, { onholdtime: number | null }, {  }>;
  originatingleadid_guid: WebAttribute<Contact_Select, { originatingleadid_guid: string | null }, { originatingleadid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Contact_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Contact_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Contact_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Contact_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Contact_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  pager: WebAttribute<Contact_Select, { pager: string | null }, {  }>;
  parentcontactid_guid: WebAttribute<Contact_Select, { parentcontactid_guid: string | null }, { parentcontactid_formatted?: string }>;
  parentcustomerid_guid: WebAttribute<Contact_Select, { parentcustomerid_guid: string | null }, { parentcustomerid_formatted?: string }>;
  participatesinworkflow: WebAttribute<Contact_Select, { participatesinworkflow: boolean | null }, {  }>;
  paymenttermscode: WebAttribute<Contact_Select, { paymenttermscode: contact_paymenttermscode | null }, { paymenttermscode_formatted?: string }>;
  preferredappointmentdaycode: WebAttribute<Contact_Select, { preferredappointmentdaycode: contact_preferredappointmentdaycode | null }, { preferredappointmentdaycode_formatted?: string }>;
  preferredappointmenttimecode: WebAttribute<Contact_Select, { preferredappointmenttimecode: contact_preferredappointmenttimecode | null }, { preferredappointmenttimecode_formatted?: string }>;
  preferredcontactmethodcode: WebAttribute<Contact_Select, { preferredcontactmethodcode: contact_preferredcontactmethodcode | null }, { preferredcontactmethodcode_formatted?: string }>;
  preferredequipmentid_guid: WebAttribute<Contact_Select, { preferredequipmentid_guid: string | null }, { preferredequipmentid_formatted?: string }>;
  preferredserviceid_guid: WebAttribute<Contact_Select, { preferredserviceid_guid: string | null }, { preferredserviceid_formatted?: string }>;
  preferredsystemuserid_guid: WebAttribute<Contact_Select, { preferredsystemuserid_guid: string | null }, { preferredsystemuserid_formatted?: string }>;
  processid: WebAttribute<Contact_Select, { processid: string | null }, {  }>;
  salutation: WebAttribute<Contact_Select, { salutation: string | null }, {  }>;
  shippingmethodcode: WebAttribute<Contact_Select, { shippingmethodcode: contact_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  slaid_guid: WebAttribute<Contact_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Contact_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  spousesname: WebAttribute<Contact_Select, { spousesname: string | null }, {  }>;
  stageid: WebAttribute<Contact_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Contact_Select, { statecode: contact_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Contact_Select, { statuscode: contact_statuscode | null }, { statuscode_formatted?: string }>;
  subscriptionid: WebAttribute<Contact_Select, { subscriptionid: string | null }, {  }>;
  suffix: WebAttribute<Contact_Select, { suffix: string | null }, {  }>;
  teamsfollowed: WebAttribute<Contact_Select, { teamsfollowed: number | null }, {  }>;
  telephone1: WebAttribute<Contact_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<Contact_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<Contact_Select, { telephone3: string | null }, {  }>;
  territorycode: WebAttribute<Contact_Select, { territorycode: contact_territorycode | null }, { territorycode_formatted?: string }>;
  timespentbymeonemailandmeetings: WebAttribute<Contact_Select, { timespentbymeonemailandmeetings: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Contact_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Contact_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Contact_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Contact_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Contact_Select, { versionnumber: number | null }, {  }>;
  websiteurl: WebAttribute<Contact_Select, { websiteurl: string | null }, {  }>;
}
interface Contact_Filter {
  accountid_guid: XQW.Guid;
  accountrolecode: contact_accountrolecode;
  address1_addressid: XQW.Guid;
  address1_addresstypecode: contact_address1_addresstypecode;
  address1_city: string;
  address1_composite: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_freighttermscode: contact_address1_freighttermscode;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_primarycontactname: string;
  address1_shippingmethodcode: contact_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: contact_address2_addresstypecode;
  address2_city: string;
  address2_composite: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_freighttermscode: contact_address2_freighttermscode;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_primarycontactname: string;
  address2_shippingmethodcode: contact_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  address3_addressid: XQW.Guid;
  address3_addresstypecode: contact_address3_addresstypecode;
  address3_city: string;
  address3_composite: string;
  address3_country: string;
  address3_county: string;
  address3_fax: string;
  address3_freighttermscode: contact_address3_freighttermscode;
  address3_latitude: number;
  address3_line1: string;
  address3_line2: string;
  address3_line3: string;
  address3_longitude: number;
  address3_name: string;
  address3_postalcode: string;
  address3_postofficebox: string;
  address3_primarycontactname: string;
  address3_shippingmethodcode: contact_address3_shippingmethodcode;
  address3_stateorprovince: string;
  address3_telephone1: string;
  address3_telephone2: string;
  address3_telephone3: string;
  address3_upszone: string;
  address3_utcoffset: number;
  adx_confirmremovepassword: boolean;
  adx_createdbyipaddress: string;
  adx_createdbyusername: string;
  adx_identity_accessfailedcount: number;
  adx_identity_emailaddress1confirmed: boolean;
  adx_identity_lastsuccessfullogin: Date;
  adx_identity_locallogindisabled: boolean;
  adx_identity_lockoutenabled: boolean;
  adx_identity_lockoutenddate: Date;
  adx_identity_logonenabled: boolean;
  adx_identity_mobilephoneconfirmed: boolean;
  adx_identity_newpassword: string;
  adx_identity_passwordhash: string;
  adx_identity_securitystamp: string;
  adx_identity_twofactorenabled: boolean;
  adx_identity_username: string;
  adx_modifiedbyipaddress: string;
  adx_modifiedbyusername: string;
  adx_organizationname: string;
  adx_preferredlcid: number;
  adx_profilealert: boolean;
  adx_profilealertdate: Date;
  adx_profilealertinstructions: string;
  adx_profileisanonymous: boolean;
  adx_profilelastactivity: Date;
  adx_profilemodifiedon: Date;
  adx_publicprofilecopy: string;
  adx_timezone: number;
  aging30: number;
  aging30_base: number;
  aging60: number;
  aging60_base: number;
  aging90: number;
  aging90_base: number;
  anniversary: Date;
  annualincome: number;
  annualincome_base: number;
  assistantname: string;
  assistantphone: string;
  birthdate: Date;
  business2: string;
  businesscard: string;
  businesscardattributes: string;
  callback: string;
  childrensnames: string;
  company: string;
  contactid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  creditlimit: number;
  creditlimit_base: number;
  creditonhold: boolean;
  customersizecode: contact_customersizecode;
  customertypecode: contact_customertypecode;
  defaultpricelevelid_guid: XQW.Guid;
  department: string;
  description: string;
  donotbulkemail: boolean;
  donotbulkpostalmail: boolean;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  donotsendmm: boolean;
  educationcode: contact_educationcode;
  emailaddress1: string;
  emailaddress2: string;
  emailaddress3: string;
  employeeid: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  externaluseridentifier: string;
  familystatuscode: contact_familystatuscode;
  fax: string;
  firstname: string;
  followemail: boolean;
  ftpsiteurl: string;
  fullname: string;
  gendercode: contact_gendercode;
  governmentid: string;
  haschildrencode: contact_haschildrencode;
  home2: string;
  importsequencenumber: number;
  isautocreate: boolean;
  isbackofficecustomer: boolean;
  isprivate: boolean;
  jobtitle: string;
  lastname: string;
  lastonholdtime: Date;
  lastusedincampaign: Date;
  leadsourcecode: contact_leadsourcecode;
  managername: string;
  managerphone: string;
  marketingonly: boolean;
  masterid_guid: XQW.Guid;
  merged: boolean;
  middlename: string;
  mobilephone: string;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msa_managingpartnerid_guid: XQW.Guid;
  msdyn_contactkpiid_guid: XQW.Guid;
  msdyn_decisioninfluencetag: contact_msdyn_decisioninfluencetag;
  msdyn_disablewebtracking: boolean;
  msdyn_gdproptout: boolean;
  msdyn_isassistantinorgchart: boolean;
  msdyn_isminor: boolean;
  msdyn_isminorwithparentalconsent: boolean;
  msdyn_orgchangestatus: contact_msdyn_orgchangestatus;
  msdyn_portaltermsagreementdate: Date;
  mspp_userpreferredlcid: powerpagelanguages;
  nickname: string;
  numberofchildren: number;
  onholdtime: number;
  originatingleadid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  pager: string;
  parentcontactid_guid: XQW.Guid;
  parentcustomerid_guid: XQW.Guid;
  participatesinworkflow: boolean;
  paymenttermscode: contact_paymenttermscode;
  preferredappointmentdaycode: contact_preferredappointmentdaycode;
  preferredappointmenttimecode: contact_preferredappointmenttimecode;
  preferredcontactmethodcode: contact_preferredcontactmethodcode;
  preferredequipmentid_guid: XQW.Guid;
  preferredserviceid_guid: XQW.Guid;
  preferredsystemuserid_guid: XQW.Guid;
  processid: XQW.Guid;
  salutation: string;
  shippingmethodcode: contact_shippingmethodcode;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  spousesname: string;
  stageid: XQW.Guid;
  statecode: contact_statecode;
  statuscode: contact_statuscode;
  subscriptionid: XQW.Guid;
  suffix: string;
  teamsfollowed: number;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  territorycode: contact_territorycode;
  timespentbymeonemailandmeetings: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  websiteurl: string;
}
interface Contact_Expand {
  CreatedContact_BulkOperationLogs: WebExpand<Contact_Expand, BulkOperationLog_Select, BulkOperationLog_Filter, { CreatedContact_BulkOperationLogs: BulkOperationLog_Result[] }>;
  SourceContact_BulkOperationLogs: WebExpand<Contact_Expand, BulkOperationLog_Select, BulkOperationLog_Filter, { SourceContact_BulkOperationLogs: BulkOperationLog_Result[] }>;
  account_primary_contact: WebExpand<Contact_Expand, Account_Select, Account_Filter, { account_primary_contact: Account_Result[] }>;
  contact_activity_parties: WebExpand<Contact_Expand, ActivityParty_Select, ActivityParty_Filter, { contact_activity_parties: ActivityParty_Result[] }>;
  contact_connections1: WebExpand<Contact_Expand, Connection_Select, Connection_Filter, { contact_connections1: Connection_Result[] }>;
  contact_connections2: WebExpand<Contact_Expand, Connection_Select, Connection_Filter, { contact_connections2: Connection_Result[] }>;
  contact_customer_contacts: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { contact_customer_contacts: Contact_Result[] }>;
  contact_master_contact: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { contact_master_contact: Contact_Result[] }>;
  masterid: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { masterid: Contact_Result }>;
  msa_managingpartnerid: WebExpand<Contact_Expand, Account_Select, Account_Filter, { msa_managingpartnerid: Account_Result }>;
  msdyn_contact_msdyn_contactkpiitem_contactid: WebExpand<Contact_Expand, msdyn_contactkpiitem_Select, msdyn_contactkpiitem_Filter, { msdyn_contact_msdyn_contactkpiitem_contactid: msdyn_contactkpiitem_Result[] }>;
  msdyn_contactkpiid: WebExpand<Contact_Expand, msdyn_contactkpiitem_Select, msdyn_contactkpiitem_Filter, { msdyn_contactkpiid: msdyn_contactkpiitem_Result }>;
  parentcustomerid_account: WebExpand<Contact_Expand, Account_Select, Account_Filter, { parentcustomerid_account: Account_Result }>;
  parentcustomerid_contact: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { parentcustomerid_contact: Contact_Result }>;
}
interface Contact_FormattedResult {
  accountid_formatted?: string;
  accountrolecode_formatted?: string;
  address1_addresstypecode_formatted?: string;
  address1_freighttermscode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_freighttermscode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  address3_addresstypecode_formatted?: string;
  address3_freighttermscode_formatted?: string;
  address3_shippingmethodcode_formatted?: string;
  adx_identity_lastsuccessfullogin_formatted?: string;
  adx_identity_lockoutenddate_formatted?: string;
  adx_profilealertdate_formatted?: string;
  adx_profilelastactivity_formatted?: string;
  adx_profilemodifiedon_formatted?: string;
  aging30_base_formatted?: string;
  aging30_formatted?: string;
  aging60_base_formatted?: string;
  aging60_formatted?: string;
  aging90_base_formatted?: string;
  aging90_formatted?: string;
  anniversary_formatted?: string;
  annualincome_base_formatted?: string;
  annualincome_formatted?: string;
  birthdate_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  creditlimit_base_formatted?: string;
  creditlimit_formatted?: string;
  customersizecode_formatted?: string;
  customertypecode_formatted?: string;
  defaultpricelevelid_formatted?: string;
  educationcode_formatted?: string;
  familystatuscode_formatted?: string;
  gendercode_formatted?: string;
  haschildrencode_formatted?: string;
  lastonholdtime_formatted?: string;
  lastusedincampaign_formatted?: string;
  leadsourcecode_formatted?: string;
  masterid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msa_managingpartnerid_formatted?: string;
  msdyn_contactkpiid_formatted?: string;
  msdyn_decisioninfluencetag_formatted?: string;
  msdyn_orgchangestatus_formatted?: string;
  msdyn_portaltermsagreementdate_formatted?: string;
  mspp_userpreferredlcid_formatted?: string;
  originatingleadid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentcontactid_formatted?: string;
  parentcustomerid_formatted?: string;
  paymenttermscode_formatted?: string;
  preferredappointmentdaycode_formatted?: string;
  preferredappointmenttimecode_formatted?: string;
  preferredcontactmethodcode_formatted?: string;
  preferredequipmentid_formatted?: string;
  preferredserviceid_formatted?: string;
  preferredsystemuserid_formatted?: string;
  shippingmethodcode_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  territorycode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  defaultpricelevelid_guid: string | null;
  masterid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msa_managingpartnerid_guid: string | null;
  msdyn_contactkpiid_guid: string | null;
  originatingleadid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentcontactid_guid: string | null;
  parentcustomerid_guid: string | null;
  preferredequipmentid_guid: string | null;
  preferredserviceid_guid: string | null;
  preferredsystemuserid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Contact_RelatedOne {
  masterid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msa_managingpartnerid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_contactkpiid: WebMappingRetrieve<msdyn_contactkpiitem_Select,msdyn_contactkpiitem_Expand,msdyn_contactkpiitem_Filter,msdyn_contactkpiitem_Fixed,msdyn_contactkpiitem_Result,msdyn_contactkpiitem_FormattedResult>;
  parentcustomerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  parentcustomerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface Contact_RelatedMany {
  CreatedContact_BulkOperationLogs: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
  SourceContact_BulkOperationLogs: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
  account_primary_contact: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  contact_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  contact_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contact_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contact_customer_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  contact_master_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_contact_msdyn_contactkpiitem_contactid: WebMappingRetrieve<msdyn_contactkpiitem_Select,msdyn_contactkpiitem_Expand,msdyn_contactkpiitem_Filter,msdyn_contactkpiitem_Fixed,msdyn_contactkpiitem_Result,msdyn_contactkpiitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRelated {
  contacts: WebMappingRelated<Contact_RelatedOne,Contact_RelatedMany>;
}
interface WebEntitiesCUDA {
  contacts: WebMappingCUDA<Contact_Create,Contact_Update,Contact_Select>;
}
interface BulkOperationLog_Base extends WebEntity {
  additionalinfo?: string | null;
  bulkoperationlogid?: string | null;
  errordescriptionformatted?: string | null;
  errornumber?: number | null;
  errornumberformatted?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BulkOperationLog_Relationships {
  BulkOperation_Logs_Accounts?: Account_Result[] | null;
  BulkOperation_Logs_Contacts?: Contact_Result[] | null;
  CampaignActivity_Logs_Accounts?: Account_Result[] | null;
  CampaignActivity_Logs_Contacts?: Contact_Result[] | null;
  createdobjectid_account?: Account_Result | null;
  createdobjectid_contact?: Contact_Result | null;
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Create extends BulkOperationLog {
  CampaignActivityId_Logs_bind$campaignactivities?: string | null;
  bulkoperationid_activitypointer_bind$activitypointers?: string | null;
  bulkoperationid_bind$bulkoperations?: string | null;
  createdobjectid_account_bind$accounts?: string | null;
  createdobjectid_activitypointer_bind$activitypointers?: string | null;
  createdobjectid_contact_bind$contacts?: string | null;
  createdobjectid_lead_bind$leads?: string | null;
  createdobjectid_opportunity_bind$opportunities?: string | null;
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_lead_bind$leads?: string | null;
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface BulkOperationLog_Select {
  additionalinfo: WebAttribute<BulkOperationLog_Select, { additionalinfo: string | null }, {  }>;
  bulkoperationid_guid: WebAttribute<BulkOperationLog_Select, { bulkoperationid_guid: string | null }, { bulkoperationid_formatted?: string }>;
  bulkoperationlogid: WebAttribute<BulkOperationLog_Select, { bulkoperationlogid: string | null }, {  }>;
  campaignactivityid_guid: WebAttribute<BulkOperationLog_Select, { campaignactivityid_guid: string | null }, { campaignactivityid_formatted?: string }>;
  createdobjectid_guid: WebAttribute<BulkOperationLog_Select, { createdobjectid_guid: string | null }, { createdobjectid_formatted?: string }>;
  errordescriptionformatted: WebAttribute<BulkOperationLog_Select, { errordescriptionformatted: string | null }, {  }>;
  errornumber: WebAttribute<BulkOperationLog_Select, { errornumber: number | null }, {  }>;
  errornumberformatted: WebAttribute<BulkOperationLog_Select, { errornumberformatted: string | null }, {  }>;
  importsequencenumber: WebAttribute<BulkOperationLog_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<BulkOperationLog_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BulkOperationLog_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BulkOperationLog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BulkOperationLog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BulkOperationLog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BulkOperationLog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<BulkOperationLog_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BulkOperationLog_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BulkOperationLog_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BulkOperationLog_Select, { versionnumber: number | null }, {  }>;
}
interface BulkOperationLog_Filter {
  additionalinfo: string;
  bulkoperationid_guid: XQW.Guid;
  bulkoperationlogid: XQW.Guid;
  campaignactivityid_guid: XQW.Guid;
  createdobjectid_guid: XQW.Guid;
  errordescriptionformatted: string;
  errornumber: number;
  errornumberformatted: string;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BulkOperationLog_Expand {
  BulkOperation_Logs_Accounts: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { BulkOperation_Logs_Accounts: Account_Result[] }>;
  BulkOperation_Logs_Contacts: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { BulkOperation_Logs_Contacts: Contact_Result[] }>;
  CampaignActivity_Logs_Accounts: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { CampaignActivity_Logs_Accounts: Account_Result[] }>;
  CampaignActivity_Logs_Contacts: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { CampaignActivity_Logs_Contacts: Contact_Result[] }>;
  createdobjectid_account: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { createdobjectid_account: Account_Result }>;
  createdobjectid_contact: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { createdobjectid_contact: Contact_Result }>;
  regardingobjectid_account: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_contact: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
}
interface BulkOperationLog_FormattedResult {
  bulkoperationid_formatted?: string;
  campaignactivityid_formatted?: string;
  createdobjectid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
  "@odata.etag": string;
  bulkoperationid_guid: string | null;
  campaignactivityid_guid: string | null;
  createdobjectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface BulkOperationLog_RelatedOne {
  createdobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  createdobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface BulkOperationLog_RelatedMany {
  BulkOperation_Logs_Accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  BulkOperation_Logs_Contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  CampaignActivity_Logs_Accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  CampaignActivity_Logs_Contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bulkoperationlogs: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
}
interface WebEntitiesRelated {
  bulkoperationlogs: WebMappingRelated<BulkOperationLog_RelatedOne,BulkOperationLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  bulkoperationlogs: WebMappingCUDA<BulkOperationLog_Create,BulkOperationLog_Update,BulkOperationLog_Select>;
}
interface ActivityParty_Base extends WebEntity {
  activitypartyid?: string | null;
  addressused?: string | null;
  addressusedemailcolumnnumber?: number | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  effort?: number | null;
  exchangeentryid?: string | null;
  instancetypecode?: activityparty_instancetypecode | null;
  ispartydeleted?: boolean | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  participationtypemask?: activityparty_participationtypemask | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  unresolvedpartyname?: string | null;
  versionnumber?: number | null;
}
interface ActivityParty_Relationships {
  partyid_account?: Account_Result | null;
  partyid_contact?: Contact_Result | null;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
  activityid_activitypointer_bind$activitypointers?: string | null;
  activityid_adx_inviteredemption_activityparty_bind$adx_inviteredemptions?: string | null;
  activityid_adx_portalcomment_activityparty_bind$adx_portalcomments?: string | null;
  activityid_appointment_bind$appointments?: string | null;
  activityid_campaignactivity_bind$campaignactivities?: string | null;
  activityid_campaignresponse_bind$campaignresponses?: string | null;
  activityid_chat_activityparty_bind$chats?: string | null;
  activityid_email_bind$emails?: string | null;
  activityid_fax_bind$faxes?: string | null;
  activityid_incidentresolution_bind$incidentresolutions?: string | null;
  activityid_letter_bind$letters?: string | null;
  activityid_msdyn_copilottranscript_activityparty_bind$msdyn_copilottranscripts?: string | null;
  activityid_msdyn_ocliveworkitem_activityparty_bind$msdyn_ocliveworkitems?: string | null;
  activityid_msdyn_ocsession_activityparty_bind$msdyn_ocsessions?: string | null;
  activityid_msfp_alert_activityparty_bind$msfp_alerts?: string | null;
  activityid_msfp_surveyinvite_activityparty_bind$msfp_surveyinvites?: string | null;
  activityid_msfp_surveyresponse_activityparty_bind$msfp_surveyresponses?: string | null;
  activityid_opportunityclose_bind$opportunitycloses?: string | null;
  activityid_orderclose_bind$ordercloses?: string | null;
  activityid_phonecall_bind$phonecalls?: string | null;
  activityid_quoteclose_bind$quotecloses?: string | null;
  activityid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  activityid_serviceappointment_bind$serviceappointments?: string | null;
  activityid_socialactivity_bind$socialactivities?: string | null;
  activityid_task_bind$tasks?: string | null;
  partyid_account_bind$accounts?: string | null;
  partyid_bulkoperation_bind$bulkoperations?: string | null;
  partyid_campaign_bind$campaigns?: string | null;
  partyid_campaignactivity_bind$campaignactivities?: string | null;
  partyid_contact_bind$contacts?: string | null;
  partyid_contract_bind$contracts?: string | null;
  partyid_entitlement_bind$entitlements?: string | null;
  partyid_equipment_bind$equipments?: string | null;
  partyid_incident_bind$incidents?: string | null;
  partyid_invoice_bind$invoices?: string | null;
  partyid_knowledgearticle_bind$knowledgearticles?: string | null;
  partyid_lead_bind$leads?: string | null;
  partyid_msdyn_salessuggestion_bind$msdyn_salessuggestions?: string | null;
  partyid_opportunity_bind$opportunities?: string | null;
  partyid_queue_bind$queues?: string | null;
  partyid_quote_bind$quotes?: string | null;
  partyid_salesorder_bind$salesorders?: string | null;
  partyid_systemuser_bind$systemusers?: string | null;
  resourcespecid_bind$resourcespecs?: string | null;
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityParty_Select {
  activityid_guid: WebAttribute<ActivityParty_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  activitypartyid: WebAttribute<ActivityParty_Select, { activitypartyid: string | null }, {  }>;
  addressused: WebAttribute<ActivityParty_Select, { addressused: string | null }, {  }>;
  addressusedemailcolumnnumber: WebAttribute<ActivityParty_Select, { addressusedemailcolumnnumber: number | null }, {  }>;
  donotemail: WebAttribute<ActivityParty_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<ActivityParty_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<ActivityParty_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<ActivityParty_Select, { donotpostalmail: boolean | null }, {  }>;
  effort: WebAttribute<ActivityParty_Select, { effort: number | null }, {  }>;
  exchangeentryid: WebAttribute<ActivityParty_Select, { exchangeentryid: string | null }, {  }>;
  instancetypecode: WebAttribute<ActivityParty_Select, { instancetypecode: activityparty_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  ispartydeleted: WebAttribute<ActivityParty_Select, { ispartydeleted: boolean | null }, {  }>;
  ownerid_guid: WebAttribute<ActivityParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ActivityParty_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ActivityParty_Select, { owninguser: string | null }, {  }>;
  participationtypemask: WebAttribute<ActivityParty_Select, { participationtypemask: activityparty_participationtypemask | null }, { participationtypemask_formatted?: string }>;
  partyid_guid: WebAttribute<ActivityParty_Select, { partyid_guid: string | null }, { partyid_formatted?: string }>;
  resourcespecid_guid: WebAttribute<ActivityParty_Select, { resourcespecid_guid: string | null }, { resourcespecid_formatted?: string }>;
  scheduledend: WebAttribute<ActivityParty_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<ActivityParty_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  unresolvedpartyname: WebAttribute<ActivityParty_Select, { unresolvedpartyname: string | null }, {  }>;
  versionnumber: WebAttribute<ActivityParty_Select, { versionnumber: number | null }, {  }>;
}
interface ActivityParty_Filter {
  activityid_guid: XQW.Guid;
  activitypartyid: XQW.Guid;
  addressused: string;
  addressusedemailcolumnnumber: number;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  effort: number;
  exchangeentryid: string;
  instancetypecode: activityparty_instancetypecode;
  ispartydeleted: boolean;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  participationtypemask: activityparty_participationtypemask;
  partyid_guid: XQW.Guid;
  resourcespecid_guid: XQW.Guid;
  scheduledend: Date;
  scheduledstart: Date;
  unresolvedpartyname: string;
  versionnumber: number;
}
interface ActivityParty_Expand {
  partyid_account: WebExpand<ActivityParty_Expand, Account_Select, Account_Filter, { partyid_account: Account_Result }>;
  partyid_contact: WebExpand<ActivityParty_Expand, Contact_Select, Contact_Filter, { partyid_contact: Contact_Result }>;
}
interface ActivityParty_FormattedResult {
  activityid_formatted?: string;
  instancetypecode_formatted?: string;
  ownerid_formatted?: string;
  participationtypemask_formatted?: string;
  partyid_formatted?: string;
  resourcespecid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  ownerid_guid: string | null;
  partyid_guid: string | null;
  resourcespecid_guid: string | null;
}
interface ActivityParty_RelatedOne {
  partyid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  partyid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface ActivityParty_RelatedMany {
}
interface WebEntitiesRetrieve {
  activityparties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
}
interface WebEntitiesRelated {
  activityparties: WebMappingRelated<ActivityParty_RelatedOne,ActivityParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityparties: WebMappingCUDA<ActivityParty_Create,ActivityParty_Update,ActivityParty_Select>;
}
interface Connection_Base extends WebEntity {
  connectionid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  effectiveend?: Date | null;
  effectivestart?: Date | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  ismaster?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  record1objecttypecode?: connection_record1objecttypecode | null;
  record2objecttypecode?: connection_record2objecttypecode | null;
  statecode?: connection_statecode | null;
  statuscode?: connection_statuscode | null;
  versionnumber?: number | null;
}
interface Connection_Relationships {
  connection_related_connection?: Connection_Result[] | null;
  record1id_account?: Account_Result | null;
  record1id_contact?: Contact_Result | null;
  record2id_account?: Account_Result | null;
  record2id_contact?: Contact_Result | null;
}
interface Connection extends Connection_Base, Connection_Relationships {
  channelaccessprofileruleid_bind$channelaccessprofilerules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  profileruleid1_bind$channelaccessprofilerules?: string | null;
  record1id_account_bind$accounts?: string | null;
  record1id_activitypointer_bind$activitypointers?: string | null;
  record1id_adx_invitation_bind$adx_invitations?: string | null;
  record1id_adx_inviteredemption_bind$adx_inviteredemptions?: string | null;
  record1id_appointment_bind$appointments?: string | null;
  record1id_campaign_bind$campaigns?: string | null;
  record1id_campaignactivity_bind$campaignactivities?: string | null;
  record1id_competitor_bind$competitors?: string | null;
  record1id_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  record1id_contact_bind$contacts?: string | null;
  record1id_contract_bind$contracts?: string | null;
  record1id_email_bind$emails?: string | null;
  record1id_entitlement_bind$entitlements?: string | null;
  record1id_entitlementchannel_bind$entitlementchannels?: string | null;
  record1id_entitlementtemplatechannel_bind$entitlementtemplatechannels?: string | null;
  record1id_equipment_bind$equipments?: string | null;
  record1id_fax_bind$faxes?: string | null;
  record1id_goal_bind$goals?: string | null;
  record1id_incident_bind$incidents?: string | null;
  record1id_invoice_bind$invoices?: string | null;
  record1id_knowledgearticle_bind$knowledgearticles?: string | null;
  record1id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record1id_lead_bind$leads?: string | null;
  record1id_letter_bind$letters?: string | null;
  record1id_list_bind$lists?: string | null;
  record1id_msdyn_assignmentmap_bind$msdyn_assignmentmaps?: string | null;
  record1id_msdyn_assignmentrule_bind$msdyn_assignmentrules?: string | null;
  record1id_msdyn_copilottranscript_bind$msdyn_copilottranscripts?: string | null;
  record1id_msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  record1id_msdyn_iotalert_bind$msdyn_iotalerts?: string | null;
  record1id_msdyn_iotdevice_bind$msdyn_iotdevices?: string | null;
  record1id_msdyn_iotdevicecategory_bind$msdyn_iotdevicecategories?: string | null;
  record1id_msdyn_iotdevicecommand_bind$msdyn_iotdevicecommands?: string | null;
  record1id_msdyn_iotdeviceregistrationhistory_bind$msdyn_iotdeviceregistrationhistories?: string | null;
  record1id_msdyn_liveconversation_bind$msdyn_liveconversations?: string | null;
  record1id_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  record1id_msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  record1id_msdyn_postalbum_bind$msdyn_postalbums?: string | null;
  record1id_msdyn_salessuggestion_bind$msdyn_salessuggestions?: string | null;
  record1id_msdyn_sequence_bind$msdyn_sequences?: string | null;
  record1id_msdyn_sequencetarget_bind$msdyn_sequencetargets?: string | null;
  record1id_msdyn_suggestionprincipalobjectaccess_bind$msdyn_suggestionprincipalobjectaccesses?: string | null;
  record1id_msfp_alert_bind$msfp_alerts?: string | null;
  record1id_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  record1id_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  record1id_mspp_publishingstatetransitionrule_bind$mspp_publishingstatetransitionrules?: string | null;
  record1id_mspp_shortcut_bind$mspp_shortcuts?: string | null;
  record1id_mspp_website_bind$mspp_websites?: string | null;
  record1id_opportunity_bind$opportunities?: string | null;
  record1id_phonecall_bind$phonecalls?: string | null;
  record1id_position_bind$positions?: string | null;
  record1id_pricelevel_bind$pricelevels?: string | null;
  record1id_processsession_bind$processsessions?: string | null;
  record1id_product_bind$products?: string | null;
  record1id_quote_bind$quotes?: string | null;
  record1id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record1id_resourcegroup_bind$resourcegroups?: string | null;
  record1id_salesorder_bind$salesorders?: string | null;
  record1id_serviceappointment_bind$serviceappointments?: string | null;
  record1id_socialactivity_bind$socialactivities?: string | null;
  record1id_socialprofile_bind$socialprofiles?: string | null;
  record1id_systemuser_bind$systemusers?: string | null;
  record1id_task_bind$tasks?: string | null;
  record1id_team_bind$teams?: string | null;
  record1id_territory_bind$territories?: string | null;
  record1roleid_bind$connectionroles?: string | null;
  record2id_account_bind$accounts?: string | null;
  record2id_activitypointer_bind$activitypointers?: string | null;
  record2id_adx_invitation_bind$adx_invitations?: string | null;
  record2id_adx_inviteredemption_bind$adx_inviteredemptions?: string | null;
  record2id_appointment_bind$appointments?: string | null;
  record2id_campaign_bind$campaigns?: string | null;
  record2id_campaignactivity_bind$campaignactivities?: string | null;
  record2id_competitor_bind$competitors?: string | null;
  record2id_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  record2id_contact_bind$contacts?: string | null;
  record2id_contract_bind$contracts?: string | null;
  record2id_email_bind$emails?: string | null;
  record2id_entitlement_bind$entitlements?: string | null;
  record2id_entitlementchannel_bind$entitlementchannels?: string | null;
  record2id_entitlementtemplatechannel_bind$entitlementtemplatechannels?: string | null;
  record2id_equipment_bind$equipments?: string | null;
  record2id_fax_bind$faxes?: string | null;
  record2id_goal_bind$goals?: string | null;
  record2id_incident_bind$incidents?: string | null;
  record2id_invoice_bind$invoices?: string | null;
  record2id_knowledgearticle_bind$knowledgearticles?: string | null;
  record2id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record2id_lead_bind$leads?: string | null;
  record2id_letter_bind$letters?: string | null;
  record2id_list_bind$lists?: string | null;
  record2id_msdyn_assignmentmap_bind$msdyn_assignmentmaps?: string | null;
  record2id_msdyn_assignmentrule_bind$msdyn_assignmentrules?: string | null;
  record2id_msdyn_copilottranscript_bind$msdyn_copilottranscripts?: string | null;
  record2id_msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  record2id_msdyn_iotalert_bind$msdyn_iotalerts?: string | null;
  record2id_msdyn_iotdevice_bind$msdyn_iotdevices?: string | null;
  record2id_msdyn_iotdevicecategory_bind$msdyn_iotdevicecategories?: string | null;
  record2id_msdyn_iotdevicecommand_bind$msdyn_iotdevicecommands?: string | null;
  record2id_msdyn_iotdeviceregistrationhistory_bind$msdyn_iotdeviceregistrationhistories?: string | null;
  record2id_msdyn_liveconversation_bind$msdyn_liveconversations?: string | null;
  record2id_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  record2id_msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  record2id_msdyn_postalbum_bind$msdyn_postalbums?: string | null;
  record2id_msdyn_salessuggestion_bind$msdyn_salessuggestions?: string | null;
  record2id_msdyn_sequence_bind$msdyn_sequences?: string | null;
  record2id_msdyn_sequencetarget_bind$msdyn_sequencetargets?: string | null;
  record2id_msdyn_suggestionprincipalobjectaccess_bind$msdyn_suggestionprincipalobjectaccesses?: string | null;
  record2id_msfp_alert_bind$msfp_alerts?: string | null;
  record2id_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  record2id_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  record2id_mspp_publishingstatetransitionrule_bind$mspp_publishingstatetransitionrules?: string | null;
  record2id_mspp_shortcut_bind$mspp_shortcuts?: string | null;
  record2id_mspp_website_bind$mspp_websites?: string | null;
  record2id_opportunity_bind$opportunities?: string | null;
  record2id_phonecall_bind$phonecalls?: string | null;
  record2id_position_bind$positions?: string | null;
  record2id_pricelevel_bind$pricelevels?: string | null;
  record2id_processsession_bind$processsessions?: string | null;
  record2id_product_bind$products?: string | null;
  record2id_quote_bind$quotes?: string | null;
  record2id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record2id_resourcegroup_bind$resourcegroups?: string | null;
  record2id_salesorder_bind$salesorders?: string | null;
  record2id_serviceappointment_bind$serviceappointments?: string | null;
  record2id_socialactivity_bind$socialactivities?: string | null;
  record2id_socialprofile_bind$socialprofiles?: string | null;
  record2id_systemuser_bind$systemusers?: string | null;
  record2id_task_bind$tasks?: string | null;
  record2id_team_bind$teams?: string | null;
  record2id_territory_bind$territories?: string | null;
  record2roleid_bind$connectionroles?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface Connection_Select {
  connectionid: WebAttribute<Connection_Select, { connectionid: string | null }, {  }>;
  createdby_guid: WebAttribute<Connection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Connection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Connection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Connection_Select, { description: string | null }, {  }>;
  effectiveend: WebAttribute<Connection_Select, { effectiveend: Date | null }, { effectiveend_formatted?: string }>;
  effectivestart: WebAttribute<Connection_Select, { effectivestart: Date | null }, { effectivestart_formatted?: string }>;
  entityimageid: WebAttribute<Connection_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Connection_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Connection_Select, { importsequencenumber: number | null }, {  }>;
  ismaster: WebAttribute<Connection_Select, { ismaster: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Connection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Connection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Connection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Connection_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Connection_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Connection_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Connection_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Connection_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Connection_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  record1id_guid: WebAttribute<Connection_Select, { record1id_guid: string | null }, { record1id_formatted?: string }>;
  record1objecttypecode: WebAttribute<Connection_Select, { record1objecttypecode: connection_record1objecttypecode | null }, { record1objecttypecode_formatted?: string }>;
  record1roleid_guid: WebAttribute<Connection_Select, { record1roleid_guid: string | null }, { record1roleid_formatted?: string }>;
  record2id_guid: WebAttribute<Connection_Select, { record2id_guid: string | null }, { record2id_formatted?: string }>;
  record2objecttypecode: WebAttribute<Connection_Select, { record2objecttypecode: connection_record2objecttypecode | null }, { record2objecttypecode_formatted?: string }>;
  record2roleid_guid: WebAttribute<Connection_Select, { record2roleid_guid: string | null }, { record2roleid_formatted?: string }>;
  relatedconnectionid_guid: WebAttribute<Connection_Select, { relatedconnectionid_guid: string | null }, { relatedconnectionid_formatted?: string }>;
  statecode: WebAttribute<Connection_Select, { statecode: connection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Connection_Select, { statuscode: connection_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Connection_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Connection_Select, { versionnumber: number | null }, {  }>;
}
interface Connection_Filter {
  connectionid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  effectiveend: Date;
  effectivestart: Date;
  entityimageid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  ismaster: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  record1id_guid: XQW.Guid;
  record1objecttypecode: connection_record1objecttypecode;
  record1roleid_guid: XQW.Guid;
  record2id_guid: XQW.Guid;
  record2objecttypecode: connection_record2objecttypecode;
  record2roleid_guid: XQW.Guid;
  relatedconnectionid_guid: XQW.Guid;
  statecode: connection_statecode;
  statuscode: connection_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Connection_Expand {
  connection_related_connection: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { connection_related_connection: Connection_Result[] }>;
  record1id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record1id_account: Account_Result }>;
  record1id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record1id_contact: Contact_Result }>;
  record2id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record2id_account: Account_Result }>;
  record2id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record2id_contact: Contact_Result }>;
  relatedconnectionid: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { relatedconnectionid: Connection_Result }>;
}
interface Connection_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveend_formatted?: string;
  effectivestart_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  record1id_formatted?: string;
  record1objecttypecode_formatted?: string;
  record1roleid_formatted?: string;
  record2id_formatted?: string;
  record2objecttypecode_formatted?: string;
  record2roleid_formatted?: string;
  relatedconnectionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  record1id_guid: string | null;
  record1roleid_guid: string | null;
  record2id_guid: string | null;
  record2roleid_guid: string | null;
  relatedconnectionid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Connection_RelatedOne {
  record1id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record1id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  record2id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record2id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  relatedconnectionid: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface Connection_RelatedMany {
  connection_related_connection: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connections: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRelated {
  connections: WebMappingRelated<Connection_RelatedOne,Connection_RelatedMany>;
}
interface WebEntitiesCUDA {
  connections: WebMappingCUDA<Connection_Create,Connection_Update,Connection_Select>;
}
interface msdyn_accountkpiitem_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountkpiitemid?: string | null;
  msdyn_acilastupdatetimestamp?: Date | null;
  msdyn_averagefirstresponsetimebytheminhrs?: number | null;
  msdyn_averagefirstresponsetimebyusinhrs?: number | null;
  msdyn_computationaccuracy?: msdyn_kpicomputationaccuracy | null;
  msdyn_date?: Date | null;
  msdyn_emailattachmentopens?: number | null;
  msdyn_emaillinksclicked?: number | null;
  msdyn_emailsreceived?: number | null;
  msdyn_emailssent?: number | null;
  msdyn_facetimewithcustomer?: number | null;
  msdyn_liemailssent?: number | null;
  msdyn_meetingsreceived?: number | null;
  msdyn_meetingssent?: number | null;
  msdyn_name?: string | null;
  msdyn_openedemails?: number | null;
  msdyn_phonecallsmade?: number | null;
  msdyn_phonecallsreceived?: number | null;
  msdyn_relationshiphealthscorestate?: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthscorestate | null;
  msdyn_relationshiphealthscorevalue?: number | null;
  msdyn_relationshiphealthtrend?: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthtrend | null;
  msdyn_responseratebythem?: number | null;
  msdyn_responseratebyus?: number | null;
  msdyn_timespentbycustomer?: number | null;
  msdyn_timespentbycustomer_calculated?: number | null;
  msdyn_timespentbyteam?: number | null;
  msdyn_timespentbyteam_calculated?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_accountkpiitem_statecode | null;
  statuscode?: msdyn_accountkpiitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_accountkpiitem_Relationships {
  msdyn_msdyn_accountkpiitem_account_accountkpiid?: Account_Result[] | null;
}
interface msdyn_accountkpiitem extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
  msdyn_accountid_bind$accounts?: string | null;
}
interface msdyn_accountkpiitem_Create extends msdyn_accountkpiitem {
}
interface msdyn_accountkpiitem_Update extends msdyn_accountkpiitem {
}
interface msdyn_accountkpiitem_Select {
  createdby_guid: WebAttribute<msdyn_accountkpiitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_accountkpiitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_accountkpiitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_accountkpiitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_accountkpiitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_accountkpiitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_accountkpiitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_accountid_guid: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_accountid_guid: string | null }, { msdyn_accountid_formatted?: string }>;
  msdyn_accountkpiitemid: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_accountkpiitemid: string | null }, {  }>;
  msdyn_acilastupdatetimestamp: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_acilastupdatetimestamp: Date | null }, { msdyn_acilastupdatetimestamp_formatted?: string }>;
  msdyn_averagefirstresponsetimebytheminhrs: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_averagefirstresponsetimebytheminhrs: number | null }, {  }>;
  msdyn_averagefirstresponsetimebyusinhrs: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_averagefirstresponsetimebyusinhrs: number | null }, {  }>;
  msdyn_computationaccuracy: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_computationaccuracy: msdyn_kpicomputationaccuracy | null }, { msdyn_computationaccuracy_formatted?: string }>;
  msdyn_date: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_emailattachmentopens: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_emailattachmentopens: number | null }, {  }>;
  msdyn_emaillinksclicked: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_emaillinksclicked: number | null }, {  }>;
  msdyn_emailsreceived: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_emailsreceived: number | null }, {  }>;
  msdyn_emailssent: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_emailssent: number | null }, {  }>;
  msdyn_facetimewithcustomer: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_facetimewithcustomer: number | null }, {  }>;
  msdyn_liemailssent: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_liemailssent: number | null }, {  }>;
  msdyn_meetingsreceived: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_meetingsreceived: number | null }, {  }>;
  msdyn_meetingssent: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_meetingssent: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_openedemails: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_openedemails: number | null }, {  }>;
  msdyn_phonecallsmade: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_phonecallsmade: number | null }, {  }>;
  msdyn_phonecallsreceived: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_phonecallsreceived: number | null }, {  }>;
  msdyn_relationshiphealthscorestate: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_relationshiphealthscorestate: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthscorestate | null }, { msdyn_relationshiphealthscorestate_formatted?: string }>;
  msdyn_relationshiphealthscorevalue: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_relationshiphealthscorevalue: number | null }, {  }>;
  msdyn_relationshiphealthtrend: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_relationshiphealthtrend: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthtrend | null }, { msdyn_relationshiphealthtrend_formatted?: string }>;
  msdyn_responseratebythem: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_responseratebythem: number | null }, {  }>;
  msdyn_responseratebyus: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_responseratebyus: number | null }, {  }>;
  msdyn_timespentbycustomer: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_timespentbycustomer: number | null }, {  }>;
  msdyn_timespentbycustomer_calculated: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_timespentbycustomer_calculated: number | null }, {  }>;
  msdyn_timespentbyteam: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_timespentbyteam: number | null }, {  }>;
  msdyn_timespentbyteam_calculated: WebAttribute<msdyn_accountkpiitem_Select, { msdyn_timespentbyteam_calculated: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_accountkpiitem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_accountkpiitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_accountkpiitem_Select, { statecode: msdyn_accountkpiitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_accountkpiitem_Select, { statuscode: msdyn_accountkpiitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_accountkpiitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_accountkpiitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_accountkpiitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_accountkpiitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_accountid_guid: XQW.Guid;
  msdyn_accountkpiitemid: XQW.Guid;
  msdyn_acilastupdatetimestamp: Date;
  msdyn_averagefirstresponsetimebytheminhrs: any;
  msdyn_averagefirstresponsetimebyusinhrs: any;
  msdyn_computationaccuracy: msdyn_kpicomputationaccuracy;
  msdyn_date: Date;
  msdyn_emailattachmentopens: any;
  msdyn_emaillinksclicked: any;
  msdyn_emailsreceived: number;
  msdyn_emailssent: number;
  msdyn_facetimewithcustomer: number;
  msdyn_liemailssent: number;
  msdyn_meetingsreceived: number;
  msdyn_meetingssent: number;
  msdyn_name: string;
  msdyn_openedemails: any;
  msdyn_phonecallsmade: number;
  msdyn_phonecallsreceived: number;
  msdyn_relationshiphealthscorestate: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthscorestate;
  msdyn_relationshiphealthscorevalue: number;
  msdyn_relationshiphealthtrend: msdyn_msdyn_accountkpiitem_msdyn_relationshiphealthtrend;
  msdyn_responseratebythem: any;
  msdyn_responseratebyus: any;
  msdyn_timespentbycustomer: number;
  msdyn_timespentbycustomer_calculated: any;
  msdyn_timespentbyteam: number;
  msdyn_timespentbyteam_calculated: any;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_accountkpiitem_statecode;
  statuscode: msdyn_accountkpiitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_accountkpiitem_Expand {
  msdyn_accountid: WebExpand<msdyn_accountkpiitem_Expand, Account_Select, Account_Filter, { msdyn_accountid: Account_Result }>;
  msdyn_msdyn_accountkpiitem_account_accountkpiid: WebExpand<msdyn_accountkpiitem_Expand, Account_Select, Account_Filter, { msdyn_msdyn_accountkpiitem_account_accountkpiid: Account_Result[] }>;
}
interface msdyn_accountkpiitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_accountid_formatted?: string;
  msdyn_acilastupdatetimestamp_formatted?: string;
  msdyn_computationaccuracy_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_relationshiphealthscorestate_formatted?: string;
  msdyn_relationshiphealthtrend_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_accountkpiitem_Result extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_accountid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_accountkpiitem_RelatedOne {
  msdyn_accountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface msdyn_accountkpiitem_RelatedMany {
  msdyn_msdyn_accountkpiitem_account_accountkpiid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_accountkpiitems: WebMappingRetrieve<msdyn_accountkpiitem_Select,msdyn_accountkpiitem_Expand,msdyn_accountkpiitem_Filter,msdyn_accountkpiitem_Fixed,msdyn_accountkpiitem_Result,msdyn_accountkpiitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_accountkpiitems: WebMappingRelated<msdyn_accountkpiitem_RelatedOne,msdyn_accountkpiitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_accountkpiitems: WebMappingCUDA<msdyn_accountkpiitem_Create,msdyn_accountkpiitem_Update,msdyn_accountkpiitem_Select>;
}
interface msdyn_contactkpiitem_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_acilastupdatetimestamp?: Date | null;
  msdyn_averagefirstresponsetimebytheminhrs?: number | null;
  msdyn_averagefirstresponsetimebyusinhrs?: number | null;
  msdyn_computationaccuracy?: msdyn_kpicomputationaccuracy | null;
  msdyn_contactkpiitemid?: string | null;
  msdyn_date?: Date | null;
  msdyn_emailattachmentopens?: number | null;
  msdyn_emaillinksclicked?: number | null;
  msdyn_emailsreceived?: number | null;
  msdyn_emailssent?: number | null;
  msdyn_facetimewithcustomer?: number | null;
  msdyn_liemailssent?: number | null;
  msdyn_meetingsreceived?: number | null;
  msdyn_meetingssent?: number | null;
  msdyn_name?: string | null;
  msdyn_numberofopportunities?: number | null;
  msdyn_openedemails?: number | null;
  msdyn_phonecallsmade?: number | null;
  msdyn_phonecallsreceived?: number | null;
  msdyn_relationshiphealthscorestate?: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate | null;
  msdyn_relationshiphealthscorevalue?: number | null;
  msdyn_relationshiphealthtrend?: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend | null;
  msdyn_responseratebythem?: number | null;
  msdyn_responseratebyus?: number | null;
  msdyn_timespentbycustomer?: number | null;
  msdyn_timespentbycustomer_calculated?: number | null;
  msdyn_timespentbyteam?: number | null;
  msdyn_timespentbyteam_calculated?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_contactkpiitem_statecode | null;
  statuscode?: msdyn_contactkpiitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contactkpiitem_Relationships {
  msdyn_msdyn_contactkpiitem_contact_contactkpiid?: Contact_Result[] | null;
}
interface msdyn_contactkpiitem extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
  msdyn_contactid_bind$contacts?: string | null;
}
interface msdyn_contactkpiitem_Create extends msdyn_contactkpiitem {
}
interface msdyn_contactkpiitem_Update extends msdyn_contactkpiitem {
}
interface msdyn_contactkpiitem_Select {
  createdby_guid: WebAttribute<msdyn_contactkpiitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contactkpiitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contactkpiitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_contactkpiitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contactkpiitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contactkpiitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contactkpiitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_acilastupdatetimestamp: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_acilastupdatetimestamp: Date | null }, { msdyn_acilastupdatetimestamp_formatted?: string }>;
  msdyn_averagefirstresponsetimebytheminhrs: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_averagefirstresponsetimebytheminhrs: number | null }, {  }>;
  msdyn_averagefirstresponsetimebyusinhrs: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_averagefirstresponsetimebyusinhrs: number | null }, {  }>;
  msdyn_computationaccuracy: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_computationaccuracy: msdyn_kpicomputationaccuracy | null }, { msdyn_computationaccuracy_formatted?: string }>;
  msdyn_contactid_guid: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_contactid_guid: string | null }, { msdyn_contactid_formatted?: string }>;
  msdyn_contactkpiitemid: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_contactkpiitemid: string | null }, {  }>;
  msdyn_date: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_emailattachmentopens: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailattachmentopens: number | null }, {  }>;
  msdyn_emaillinksclicked: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emaillinksclicked: number | null }, {  }>;
  msdyn_emailsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailsreceived: number | null }, {  }>;
  msdyn_emailssent: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailssent: number | null }, {  }>;
  msdyn_facetimewithcustomer: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_facetimewithcustomer: number | null }, {  }>;
  msdyn_liemailssent: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_liemailssent: number | null }, {  }>;
  msdyn_meetingsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_meetingsreceived: number | null }, {  }>;
  msdyn_meetingssent: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_meetingssent: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofopportunities: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_numberofopportunities: number | null }, {  }>;
  msdyn_openedemails: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_openedemails: number | null }, {  }>;
  msdyn_phonecallsmade: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_phonecallsmade: number | null }, {  }>;
  msdyn_phonecallsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_phonecallsreceived: number | null }, {  }>;
  msdyn_relationshiphealthscorestate: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthscorestate: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate | null }, { msdyn_relationshiphealthscorestate_formatted?: string }>;
  msdyn_relationshiphealthscorevalue: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthscorevalue: number | null }, {  }>;
  msdyn_relationshiphealthtrend: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthtrend: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend | null }, { msdyn_relationshiphealthtrend_formatted?: string }>;
  msdyn_responseratebythem: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_responseratebythem: number | null }, {  }>;
  msdyn_responseratebyus: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_responseratebyus: number | null }, {  }>;
  msdyn_timespentbycustomer: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbycustomer: number | null }, {  }>;
  msdyn_timespentbycustomer_calculated: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbycustomer_calculated: number | null }, {  }>;
  msdyn_timespentbyteam: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbyteam: number | null }, {  }>;
  msdyn_timespentbyteam_calculated: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbyteam_calculated: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_contactkpiitem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_contactkpiitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_contactkpiitem_Select, { statecode: msdyn_contactkpiitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contactkpiitem_Select, { statuscode: msdyn_contactkpiitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contactkpiitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contactkpiitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contactkpiitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contactkpiitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_acilastupdatetimestamp: Date;
  msdyn_averagefirstresponsetimebytheminhrs: any;
  msdyn_averagefirstresponsetimebyusinhrs: any;
  msdyn_computationaccuracy: msdyn_kpicomputationaccuracy;
  msdyn_contactid_guid: XQW.Guid;
  msdyn_contactkpiitemid: XQW.Guid;
  msdyn_date: Date;
  msdyn_emailattachmentopens: any;
  msdyn_emaillinksclicked: any;
  msdyn_emailsreceived: number;
  msdyn_emailssent: number;
  msdyn_facetimewithcustomer: number;
  msdyn_liemailssent: number;
  msdyn_meetingsreceived: number;
  msdyn_meetingssent: number;
  msdyn_name: string;
  msdyn_numberofopportunities: number;
  msdyn_openedemails: any;
  msdyn_phonecallsmade: number;
  msdyn_phonecallsreceived: number;
  msdyn_relationshiphealthscorestate: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate;
  msdyn_relationshiphealthscorevalue: number;
  msdyn_relationshiphealthtrend: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend;
  msdyn_responseratebythem: any;
  msdyn_responseratebyus: any;
  msdyn_timespentbycustomer: number;
  msdyn_timespentbycustomer_calculated: any;
  msdyn_timespentbyteam: number;
  msdyn_timespentbyteam_calculated: any;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_contactkpiitem_statecode;
  statuscode: msdyn_contactkpiitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contactkpiitem_Expand {
  msdyn_contactid: WebExpand<msdyn_contactkpiitem_Expand, Contact_Select, Contact_Filter, { msdyn_contactid: Contact_Result }>;
  msdyn_msdyn_contactkpiitem_contact_contactkpiid: WebExpand<msdyn_contactkpiitem_Expand, Contact_Select, Contact_Filter, { msdyn_msdyn_contactkpiitem_contact_contactkpiid: Contact_Result[] }>;
}
interface msdyn_contactkpiitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_acilastupdatetimestamp_formatted?: string;
  msdyn_computationaccuracy_formatted?: string;
  msdyn_contactid_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_relationshiphealthscorestate_formatted?: string;
  msdyn_relationshiphealthtrend_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_contactkpiitem_Result extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contactid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_contactkpiitem_RelatedOne {
  msdyn_contactid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface msdyn_contactkpiitem_RelatedMany {
  msdyn_msdyn_contactkpiitem_contact_contactkpiid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contactkpiitems: WebMappingRetrieve<msdyn_contactkpiitem_Select,msdyn_contactkpiitem_Expand,msdyn_contactkpiitem_Filter,msdyn_contactkpiitem_Fixed,msdyn_contactkpiitem_Result,msdyn_contactkpiitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contactkpiitems: WebMappingRelated<msdyn_contactkpiitem_RelatedOne,msdyn_contactkpiitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contactkpiitems: WebMappingCUDA<msdyn_contactkpiitem_Create,msdyn_contactkpiitem_Update,msdyn_contactkpiitem_Select>;
}
