using Microsoft.Xrm.Sdk;
using System;

namespace ProjectName.Plugins.Contacts.PreOperations
{
    public class UpperLastNamePlugin: IPlugin
    {
        private ITracingService _tracingService;
        private IPluginExecutionContext _context;

        public void Execute(IServiceProvider serviceProvider)
        {
            Initialize(serviceProvider);

            if (_context.MessageName != "Create")
            {
                _tracingService.Trace("Plugin message is " + _context.MessageName);
                throw new InvalidPluginExecutionException("Message Name is not Create");
            }

            var contact = (Entity)_context.InputParameters["Target"];
            if (!contact.Contains("lastname"))
            {
                return;
            }

            contact["lastname"] = contact.GetAttributeValue<string>("lastname").ToUpper();
        }

        private void Initialize(IServiceProvider serviceProvider)
        {
            if (serviceProvider == null)
            {
                throw new ArgumentNullException("serviceProvider is null");
            }

            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            if (!_context.InputParameters.Contains("Target") || !(_context.InputParameters["Target"] is Entity))
            {
                throw new ArgumentNullException("Target is not Entity");
            }

            _tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        }
    }
}
