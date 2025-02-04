using System.Linq;
using FakeXrmEasy.Abstractions.Plugins.Enums;
using FakeXrmEasy.Pipeline;
using FakeXrmEasy.Plugins.Audit;
using FakeXrmEasy.Plugins.Definitions;
using FakeXrmEasy.Plugins.PluginSteps;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProjectName.Plugins.Contacts.PreOperations;

namespace ProjectName.Plugins.Tests.Contacts.PreOperations
{
    [TestClass]
    public class UpperLastNamePluginTest:PluginTestBase
    {
        private readonly IPluginStepDefinition _createStepDefinition = new PluginStepDefinition()
        {
            EntityLogicalName = "contact",
            MessageName = "Create",
            Stage = ProcessingStepStage.Preoperation,
            Mode = ProcessingStepMode.Synchronous,
            FilteringAttributes = new[] { "lastname" }
        };

        [TestMethod]
        public void Should_trigger_on_create_with_filtering_attributes()
        {
            //Arrange
            context.RegisterPluginStep<UpperLastNamePlugin>(_createStepDefinition);
            var entity = new Entity();

            //Act
            service.Create(entity);

            var pluginStepAudit = context.GetPluginStepAudit();
            var stepsAudit = pluginStepAudit.CreateQuery().ToList();

            //Assert
            Assert.IsNotNull(stepsAudit);
            Assert.AreEqual(1, stepsAudit.Count);
            Assert.AreEqual("Create", stepsAudit.First().MessageName);
            Assert.AreEqual(typeof(UpperLastNamePluginTest), stepsAudit.First().PluginAssemblyType);
        }

        [TestMethod]
        public void Should_not_trigger_on_create_without_filtering_attributes()
        {
            //Arrange
            context.RegisterPluginStep<UpperLastNamePlugin>(_createStepDefinition);
            var entity = new Entity();

            //Act
            service.Create(entity);

            var pluginStepAudit = context.GetPluginStepAudit();
            var stepsAudit = pluginStepAudit.CreateQuery().ToList();

            //Assert
            Assert.IsNotNull(stepsAudit);
            Assert.AreEqual(0, stepsAudit.Count);
        }
    }
}
