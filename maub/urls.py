from django.conf.urls import url, include
from django.contrib import admin

from main.views import IndexView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^$', IndexView.as_view(), name='index'),
]
