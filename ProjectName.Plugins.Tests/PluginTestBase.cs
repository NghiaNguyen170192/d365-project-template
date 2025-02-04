using System.Reflection;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.FakeMessageExecutors;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using FakeXrmEasy.Middleware.Pipeline;
using Microsoft.Xrm.Sdk;

namespace ProjectName.Plugins.Tests
{
    public class PluginTestBase
    {
        protected readonly IXrmFakedContext context;
        protected readonly IOrganizationService service;

        public PluginTestBase()
        {
            context = MiddlewareBuilder
                .New()

                // Add* -> Middleware configuration
                .AddCrud()
                .AddFakeMessageExecutors(Assembly.GetAssembly(typeof(AddListMembersListRequestExecutor)))
                .AddPipelineSimulation(new PipelineOptions() { UsePluginStepAudit = true })

                // Use* -> Defines pipeline sequence
                .UsePipelineSimulation()
                .UseCrud()
                .UseMessages()

                .SetLicense(FakeXrmEasyLicense.NonCommercial)
                .Build();

            service = context.GetOrganizationService();
        }
    }
}
