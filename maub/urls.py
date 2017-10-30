from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin

from main.views import *
from maub import settings

urlpatterns = [
    url(r'^jet/', include('jet.urls', 'jet')),
    url(r'^admin/', admin.site.urls),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^conferences/', ConferenceView.as_view(), name='conference'),
    url(r'^news/', NewsView.as_view(), name='all_news'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)