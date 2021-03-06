from django.shortcuts import get_object_or_404

from django.views.generic import TemplateView, ListView, DetailView

from main.models import News, Slider, University, Conference, Gallery, MainUniversity, Regulation


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all().order_by('updated')
        context['slider'] = Slider.objects.all().order_by('updated')
        context['universities'] = University.objects.filter(active=True)
        context['konferans'] = Conference.objects.filter(active=True)[:4]
        context['gallery'] = Gallery.objects.all()
        context['index'] = 'index'
        context['regulation'] = Regulation.objects.last()

        return context


class ConferenceView(ListView):
    template_name = 'events.html'
    model = Conference


class NewsView(ListView):
    model = News
    template_name = 'news.html'


class SingleNews(TemplateView):
    model = News
    template_name = 'single-news.html'

    def get_context_data(self, **kwargs):
        context = super(SingleNews, self).get_context_data(**kwargs)
        context['news'] = get_object_or_404(self.model, id=self.kwargs.get('id'))

        return context


class SingleEvent(TemplateView):
    model = Conference
    template_name = 'single-event.html'

    def get_context_data(self, **kwargs):
        context = super(SingleEvent, self).get_context_data(**kwargs)
        context['event'] = get_object_or_404(self.model, id=self.kwargs.get('id'))

        return context


class UniversityView(TemplateView):
    model = University
    template_name = 'universities.html'

    def get_context_data(self, **kwargs):
        context = super(UniversityView, self).get_context_data(**kwargs)
        context['country'] = MainUniversity.objects.all()

        return context
