from __future__ import absolute_import

from jinja2 import Markup
from rstblog.programs import RSTProgram

import typogrify


def typogrify_filter(s):
    return Markup(typogrify.typogrify(s))


class TypogrifyRSTProgram(RSTProgram):
    def get_fragments(self):
        if self._fragment_cache is not None:
            return self._fragment_cache
        with self.context.open_source_file() as f:
            self.get_header(f)
            rv = self.context.render_rst(f.read().decode('utf-8'))
        rv['fragment'] = Markup(typogrify.typogrify(rv['fragment']))
        self._fragment_cache = rv
        return rv


def setup(builder):
    env = builder.jinja_env
    env.filters['typogrify'] = typogrify_filter
    builder.programs['rst'] = TypogrifyRSTProgram
