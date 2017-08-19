from django.shortcuts import render
from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'home/index.html'

    def get(self, request):
        context = {
            'title': 'Base',
        }
        return render(request, self.template_name, context)
