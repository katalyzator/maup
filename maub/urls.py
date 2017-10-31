from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from solid_i18n.urls import solid_i18n_patterns

from main.views import *
from maub import settings

urlpatterns = []
urlpatterns += solid_i18n_patterns(
    url(r'^jet/', include('jet.urls', 'jet')),
    url(r'^admin/', admin.site.urls),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^conferences/$', ConferenceView.as_view(), name='conference'),
    url(r'^news/$', NewsView.as_view(), name='all_news'),
    url(r'^news/(?P<id>\d+)/$', SingleNews.as_view(), name='single_news'),
    url(r'^conferences/(?P<id>\d+)/$', SingleEvent.as_view(), name='single_event'),
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
