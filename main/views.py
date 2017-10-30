from django.shortcuts import render

from django.views.generic import TemplateView, ListView

from main.models import News, Slider, University, Conference


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all().order_by('updated')
        context['slider'] = Slider.objects.all().order_by('updated')
        context['universities'] = University.objects.filter(active=True)
        context['conferences'] = Conference.objects.filter(active=True)

        return context


class ConferenceView(TemplateView):
    template_name = 'all_conferences.html'


class NewsView(ListView):
    model = News
    template_name = 'news.html'
