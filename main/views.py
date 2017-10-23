from django.shortcuts import render

from django.views.generic import TemplateView

from main.models import News, Slider, University


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all().order_by('updated')
        context['slider'] = Slider.objects.all().order_by('updated')
        context['universities'] = University.objects.filter()

        return context
