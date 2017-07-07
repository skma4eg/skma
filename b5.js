function latest_recent_comments(_0x7616x2) {
    var _0x7616x3;
    _0x7616x3 = '<ul class="latest_recent_comments" id="latestrecentcomments"><li class="top">\u0627\u062D\u062F\u062B \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A</li>';
    for (var _0x7616x4 = 0; _0x7616x4 < numComments; _0x7616x4++) {
        var _0x7616x5, _0x7616x6, _0x7616x7, _0x7616x8;
        if (_0x7616x4 == _0x7616x2['feed']['entry']['length']) {
            break
        };
        _0x7616x3 += '<li>';
        var _0x7616x9 = _0x7616x2['feed']['entry'][_0x7616x4];
        for (var _0x7616xa = 0; _0x7616xa < _0x7616x9['link']['length']; _0x7616xa++) {
            if (_0x7616x9['link'][_0x7616xa]['rel'] == 'alternate') {
                _0x7616x5 = _0x7616x9['link'][_0x7616xa]['href']
            }
        };
        for (var _0x7616xb = 0; _0x7616xb < _0x7616x9['author']['length']; _0x7616xb++) {
            _0x7616x6 = _0x7616x9['author'][_0x7616xb]['name']['$t'];
            _0x7616x7 = _0x7616x9['author'][_0x7616xb]['gd$image']['src']
        };
        if (_0x7616x7['indexOf']('/s1600/') != -1) {
            _0x7616x7 = _0x7616x7['replace']('/s1600/', '/s' + avatarSize + '-c/')
        } else {
            if (_0x7616x7['indexOf']('/s220/') != -1) {
                _0x7616x7 = _0x7616x7['replace']('/s220/', '/s' + avatarSize + '-c/')
            } else {
                if (_0x7616x7['indexOf']('/s512-c/') != -1 && _0x7616x7['indexOf']('http:') != 0) {
                    _0x7616x7 = 'http:' + _0x7616x7['replace']('/s512-c/', '/s' + avatarSize + '-c/')
                } else {
                    if (_0x7616x7['indexOf']('blogblog.com/img/b16-rounded.gif') != -1) {
                        _0x7616x7 = 'http://1.bp.blogspot.com/-NAMZejK41So/T0evV0_SSUI/AAAAAAAACso/ol6-PKkZipA/s' + avatarSize + '/md_blogger_logo.png'
                    } else {
                        if (_0x7616x7['indexOf']('blogblog.com/img/openid16-rounded.gif') != -1) {
                            _0x7616x7 = 'http://4.bp.blogspot.com/-k0U7v1WpNRs/T0euKMHQi_I/AAAAAAAACsg/DNqzinhvxt4/s' + avatarSize + '/md_openid_logo.png'
                        } else {
                            if (_0x7616x7['indexOf']('blogblog.com/img/blank.gif') != -1) {
                                if (defaultAvatar['indexOf']('gravatar.com') != -1) {
                                    _0x7616x7 = defaultAvatar + '&s=' + avatarSize
                                } else {
                                    _0x7616x7 = defaultAvatar
                                }
                            } else {
                                _0x7616x7 = _0x7616x7
                            }
                        }
                    }
                }
            }
        };
        if (showAvatar == true) {
            if (roundAvatar == true) {
                _0x7616x8 = 'avatarRound'
            } else {
                _0x7616x8 = ''
            };
            _0x7616x3 += '<div class="avatarImage"><img class="' + _0x7616x8 + '" src="' + _0x7616x7 + '" alt="' + _0x7616x6 + '" width="' + avatarSize + '" height="' + avatarSize + '"/>'
        };
        _0x7616x3 += '<div class="commentsinfois"><h5>' + _0x7616x6 + '</h5>';
        var _0x7616xc = _0x7616x9['content']['$t'];
        var _0x7616xd = _0x7616xc['replace'](/(<([^>]+)>)/ig, '');
        if (_0x7616xd != '' && _0x7616xd['length'] > characters) {
            _0x7616xd = _0x7616xd['substring'](0, characters);
            _0x7616xd += '&#8230;'
        } else {
            _0x7616xd = _0x7616xd
        };
        _0x7616x3 += '<a href="' + _0x7616x5 + '">' + _0x7616xd + '</a></div>';
        _0x7616x3 += '</li>'
    };
    _0x7616x3 += '';
    document['write'](_0x7616x3)
}
var numComments = numComments || 5,
    avatarSize = avatarSize || 30,
    characters = characters || 30,
    defaultAvatar = defaultAvatar || 'http://4.bp.blogspot.com/-DMMlf1xVd98/VT_L8JhlH9I/AAAAAAAAJ2w/ddzXLEan-RA/s1600/no-image-icon.png',
    showAvatar = 'undefined' === typeof showAvatar ? !0 : showAvatar,
    roundAvatar = 'undefined' === typeof roundAvatar ? !0 : roundAvatar,
    hideCredits = 'undefined' === typeof hideCredits ? !1 : roundAvatar;
$(document)['ready'](function() {
    $('#latestrecentcomments')['append']('<a href=\'https://www.facebook.com/elsayed.k.mohamed\' rel=\'follow\' style=\'position: absolute !important;visibility: hidden !important;max-width: 1px !important;max-height: 1px !important;display: inline-block !important;overflow: hidden !important;\' >Design: Elsayed Kamal</a>')